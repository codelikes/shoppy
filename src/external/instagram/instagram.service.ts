import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Profile } from './types/profile';
import { getInstagramUserAgent } from './utils';
import { Feed } from './types/feed';

@Injectable()
export class InstagramService {
  constructor(private readonly httpService: HttpService) {}

  async getProfile(username: string): Promise<Profile> {
    const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
    const profile = await this.httpService
      .get(url, {
        headers: {
          'User-Agent': getInstagramUserAgent(),
        },
      })
      .toPromise();

    return profile.data.data.user as Profile;
  }

  async getFeed(username: string): Promise<Feed> {
    const url = `https://www.instagram.com/api/v1/feed/user/44449439838/?count=12&max_id=3097329591944162768_44449439838`;
    const profile = await this.httpService
      .get(url, {
        headers: {
          'User-Agent': getInstagramUserAgent(),
        },
      })
      .toPromise();

    return profile.data.data as Feed;
  }
}
