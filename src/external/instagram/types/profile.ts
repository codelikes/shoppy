export interface ProfileResponse {
  data: Profile;
  status: string;
}

export interface Profile {
  biography: string;
  bio_links: BioLink[];
  biography_with_entities: BiographyWithEntities;
  blocked_by_viewer: boolean;
  restricted_by_viewer: null;
  country_block: boolean;
  eimu_id: string;
  external_url: string;
  external_url_linkshimmed: string;
  edge_followed_by: EdgeFollowClass;
  fbid: string;
  followed_by_viewer: boolean;
  edge_follow: EdgeFollowClass;
  follows_viewer: boolean;
  full_name: string;
  group_metadata: null;
  has_ar_effects: boolean;
  has_clips: boolean;
  has_guides: boolean;
  has_channel: boolean;
  has_blocked_viewer: boolean;
  highlight_reel_count: number;
  has_requested_viewer: boolean;
  hide_like_and_view_counts: boolean;
  id: string;
  is_business_account: boolean;
  is_professional_account: boolean;
  is_supervision_enabled: boolean;
  is_guardian_of_viewer: boolean;
  is_supervised_by_viewer: boolean;
  is_supervised_user: boolean;
  is_embeds_disabled: boolean;
  is_joined_recently: boolean;
  guardian_id: null;
  business_address_json: null;
  business_contact_method: string;
  business_email: null;
  business_phone_number: null;
  business_category_name: string;
  overall_category_name: null;
  category_enum: string;
  category_name: string;
  is_private: boolean;
  is_verified: boolean;
  is_verified_by_mv4b: boolean;
  edge_mutual_followed_by: EdgeMutualFollowedBy;
  profile_pic_url: string;
  profile_pic_url_hd: string;
  requested_by_viewer: boolean;
  should_show_category: boolean;
  should_show_public_contacts: boolean;
  show_account_transparency_details: boolean;
  transparency_label: null;
  transparency_product: string;
  username: Username;
  connected_fb_page: null;
  pronouns: any[];
  edge_felix_video_timeline: EdgeFelixVideoTimelineClass;
  edge_owner_to_timeline_media: EdgeFelixVideoTimelineClass;
  edge_saved_media: EdgeFelixVideoTimelineClass;
  edge_media_collections: EdgeFelixVideoTimelineClass;
  edge_related_profiles: EdgeRelatedProfilesClass;
}

export interface BioLink {
  title: string;
  lynx_url: string;
  url: string;
  link_type: string;
}

export interface BiographyWithEntities {
  raw_text: string;
  entities: any[];
}

export interface EdgeFelixVideoTimelineClass {
  count: number;
  page_info: PageInfo;
  edges: EdgeFelixVideoTimelineEdge[];
}

export interface EdgeFelixVideoTimelineEdge {
  node: PurpleNode;
}

export interface PurpleNode {
  __typename: PurpleTypename;
  id: string;
  shortcode: string;
  dimensions: Dimensions;
  display_url: string;
  edge_media_to_tagged_user: EdgeRelatedProfilesClass;
  fact_check_overall_rating: null;
  fact_check_information: null;
  gating_info: null;
  sharing_friction_info: SharingFrictionInfo;
  media_overlay_info: null;
  media_preview: null | string;
  owner: Owner;
  is_video: boolean;
  has_upcoming_event: boolean;
  accessibility_caption: null;
  dash_info?: DashInfo;
  has_audio?: boolean;
  tracking_token?: string;
  video_url?: string;
  video_view_count?: number;
  edge_media_to_caption: EdgeRelatedProfilesClass;
  edge_media_to_comment: EdgeFollowClass;
  comments_disabled: boolean;
  taken_at_timestamp: number;
  edge_liked_by: EdgeFollowClass;
  edge_media_preview_like: EdgeFollowClass;
  location: Location | null;
  nft_asset_info: null;
  thumbnail_src: string;
  thumbnail_resources: ThumbnailResource[];
  felix_profile_grid_crop?: null;
  coauthor_producers: any[];
  pinned_for_users: any[];
  viewer_can_reshare: boolean;
  product_type?: string;
  clips_music_attribution_info?: null;
  edge_sidecar_to_children?: EdgeSidecarToChildren;
}

export enum PurpleTypename {
  GraphSidecar = 'GraphSidecar',
  GraphVideo = 'GraphVideo',
}

export interface DashInfo {
  is_dash_eligible: boolean;
  video_dash_manifest: null;
  number_of_qualities: number;
}

export interface Dimensions {
  height: number;
  width: number;
}

export interface EdgeFollowClass {
  count: number;
}

export interface EdgeRelatedProfilesClass {
  edges: EdgeRelatedProfilesEdge[];
}

export interface EdgeRelatedProfilesEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  text: string;
}

export interface EdgeSidecarToChildren {
  edges: EdgeSidecarToChildrenEdge[];
}

export interface EdgeSidecarToChildrenEdge {
  node: TentacledNode;
}

export interface TentacledNode {
  __typename: FluffyTypename;
  id: string;
  shortcode: string;
  dimensions: Dimensions;
  display_url: string;
  edge_media_to_tagged_user: EdgeRelatedProfilesClass;
  fact_check_overall_rating: null;
  fact_check_information: null;
  gating_info: null;
  sharing_friction_info: SharingFrictionInfo;
  media_overlay_info: null;
  media_preview: string;
  owner: Owner;
  is_video: boolean;
  has_upcoming_event: boolean;
  accessibility_caption: null;
}

export enum FluffyTypename {
  GraphImage = 'GraphImage',
}

export interface Owner {
  id: string;
  username: Username;
}

export enum Username {
  OpioDeporte = 'opio.deporte',
}

export interface SharingFrictionInfo {
  should_have_sharing_friction: boolean;
  bloks_app_url: null;
}

export interface Location {
  id: string;
  has_public_page: boolean;
  name: string;
  slug: string;
}

export interface ThumbnailResource {
  src: string;
  config_width: number;
  config_height: number;
}

export interface PageInfo {
  has_next_page: boolean;
  end_cursor: null | string;
}

export interface EdgeMutualFollowedBy {
  count: number;
  edges: any[];
}
