export interface Feed {
  items: Item[];
  num_results: number;
  more_available: boolean;
  user: IgArtistClass;
  auto_load_more_enabled: boolean;
  status: string;
}

export interface Item {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  clips_tab_pinned_user_ids: any[];
  comment_inform_treatment: CommentInformTreatment;
  sharing_friction_info: SharingFrictionInfo;
  caption_is_edited: boolean;
  original_media_has_visual_reply_media: boolean;
  like_and_view_counts_disabled: boolean;
  can_viewer_save: boolean;
  is_in_profile_grid: boolean;
  profile_grid_control_enabled: boolean;
  featured_products: any[];
  is_comments_gif_composer_enabled: boolean;
  product_suggestions: any[];
  product_type: ClipsCreationEntryPointEnum;
  is_paid_partnership: boolean;
  location?: Location;
  music_metadata: MusicMetadata | null;
  deleted_reason: number;
  organic_tracking_token: string;
  show_shop_entrypoint: boolean;
  integrity_review_decision: IntegrityReviewDecision;
  commerce_integrity_review_decision: string;
  ig_media_sharing_disabled: boolean;
  has_shared_to_fb: number;
  is_unified_video: boolean;
  should_request_ads: boolean;
  is_visual_reply_commenter_notice_enabled: boolean;
  commerciality_status: CommercialityStatus;
  explore_hide_comments: boolean;
  has_delayed_metadata: boolean;
  lat?: number;
  lng?: number;
  comment_threading_enabled: boolean;
  max_num_visible_preview_comments: number;
  has_more_comments: boolean;
  preview_comments: any[];
  comments: any[];
  comment_count: number;
  can_view_more_preview_comments: boolean;
  hide_view_all_comment_entrypoint: boolean;
  inline_composer_display_condition: InlineComposerDisplayCondition;
  carousel_media_count?: number;
  carousel_media?: CarouselMedia[];
  carousel_media_ids?: string[];
  can_see_insights_as_brand: boolean;
  user: CaptionUser;
  can_viewer_reshare: boolean;
  has_liked: boolean;
  like_count: number;
  top_likers: TopLiker[];
  facepile_top_likers: any[];
  is_organic_product_tagging_eligible: boolean;
  caption: Caption;
  play_count?: number;
  media_cropping_info?: MediaCroppingInfo;
  is_third_party_downloads_eligible?: boolean;
  crosspost?: string[];
  image_versions2?: ItemImageVersions2;
  original_width?: number;
  original_height?: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: VideoVersion[];
  has_audio?: boolean;
  video_duration?: number;
  clips_metadata?: ClipsMetadata;
}

export interface Caption {
  pk: string;
  user_id: string;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: ContentType;
  status: Status;
  bit_flags: number;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  user: CaptionUser;
  is_covered: boolean;
  is_ranked_comment: boolean;
  media_id: string;
  has_translation: boolean;
  private_reply_status: number;
}

export enum ContentType {
  Comment = 'comment',
}

export enum Status {
  Active = 'Active',
}

export interface CaptionUser {
  has_anonymous_profile_picture: boolean;
  fan_club_info: FanClubInfo;
  fbid_v2: string;
  transparency_product_enabled: boolean;
  is_favorite: boolean;
  is_unpublished: boolean;
  pk: string;
  pk_id: string;
  strong_id__: string;
  username: Username;
  full_name: FullName;
  is_private: boolean;
  is_verified: boolean;
  profile_pic_id: ProfilePicID;
  profile_pic_url: string;
  account_badges: any[];
  feed_post_reshare_disabled: boolean;
  show_account_transparency_details: boolean;
  third_party_downloads_enabled: number;
  latest_reel_media: number;
}

export interface FanClubInfo {
  fan_club_id: null;
  fan_club_name: null;
  is_fan_club_referral_eligible: null;
  fan_consideration_page_revamp_eligiblity: null;
  is_fan_club_gifting_eligible: null;
  subscriber_count: null;
  connected_member_count: null;
  autosave_to_exclusive_highlight: null;
}

export enum FullName {
  Opio = 'opio',
}

export enum ProfilePicID {
  The3081426782220596824_44449439838 = '3081426782220596824_44449439838',
}

export enum Username {
  OpioDeporte = 'opio.deporte',
}

export interface CarouselMedia {
  id: string;
  media_type: number;
  image_versions2: CarouselMediaImageVersions2;
  original_width: number;
  original_height: number;
  explore_pivot_grid: boolean;
  accessibility_caption: string;
  product_type: CarouselMediaProductType;
  pk: string;
  carousel_parent_id: string;
  commerciality_status: CommercialityStatus;
  sharing_friction_info: SharingFrictionInfo;
  product_suggestions: any[];
}

export enum CommercialityStatus {
  NotCommercial = 'not_commercial',
}

export interface CarouselMediaImageVersions2 {
  candidates: FirstFrame[];
}

export interface FirstFrame {
  width: number;
  height: number;
  url: string;
}

export enum CarouselMediaProductType {
  CarouselItem = 'carousel_item',
}

export interface SharingFrictionInfo {
  should_have_sharing_friction: boolean;
  bloks_app_url: null;
  sharing_friction_payload: null;
}

export interface ClipsMetadata {
  music_info: MusicInfo;
  original_sound_info: null;
  audio_type: string;
  music_canonical_id: string;
  featured_label: null;
  mashup_info: MashupInfo;
  reusable_text_info: null;
  reusable_text_attribute_string: null;
  nux_info: null;
  viewer_interaction_settings: null;
  branded_content_tag_info: BrandedContentTagInfo;
  shopping_info: null;
  additional_audio_info: AdditionalAudioInfo;
  is_shared_to_fb: boolean;
  breaking_content_info: null;
  challenge_info: null;
  reels_on_the_rise_info: null;
  breaking_creator_info: null;
  asset_recommendation_info: null;
  contextual_highlight_info: null;
  clips_creation_entry_point: ClipsCreationEntryPointEnum;
  audio_ranking_info: AudioRankingInfo;
  template_info: null;
  is_fan_club_promo_video: boolean;
  disable_use_in_clips_client_cache: boolean;
  content_appreciation_info: null;
  achievements_info: AchievementsInfo;
  show_achievements: boolean;
  show_tips: boolean;
  merchandising_pill_info: null;
  is_public_chat_welcome_video: boolean;
  professional_clips_upsell_type: number;
  high_intent_follow_eligible: boolean;
}

export interface AchievementsInfo {
  show_achievements: boolean;
  num_earned_achievements: null;
}

export interface AdditionalAudioInfo {
  additional_audio_username: null;
  audio_reattribution_info: AudioReattributionInfo;
}

export interface AudioReattributionInfo {
  should_allow_restore: boolean;
}

export interface AudioRankingInfo {
  best_audio_cluster_id: string;
}

export interface BrandedContentTagInfo {
  can_add_tag: boolean;
}

export enum ClipsCreationEntryPointEnum {
  CarouselContainer = 'carousel_container',
  Clips = 'clips',
}

export interface MashupInfo {
  mashups_allowed: boolean;
  can_toggle_mashups_allowed: boolean;
  has_been_mashed_up: boolean;
  formatted_mashups_count: null;
  original_media: null;
  privacy_filtered_mashups_media_count: null;
  non_privacy_filtered_mashups_media_count: null;
  mashup_type: null;
  is_creator_requesting_mashup: boolean;
  has_nonmimicable_additional_audio: boolean;
}

export interface MusicInfo {
  music_asset_info: MusicAssetInfo;
  music_consumption_info: MusicConsumptionInfo;
  music_canonical_id: null;
}

export interface MusicAssetInfo {
  audio_cluster_id: string;
  id: string;
  title: string;
  sanitized_title: null;
  subtitle: string;
  display_artist: string;
  artist_id: string;
  cover_artwork_uri: string;
  cover_artwork_thumbnail_uri: string;
  progressive_download_url: string;
  reactive_audio_download_url: null;
  fast_start_progressive_download_url: string;
  web_30s_preview_download_url: string;
  highlight_start_times_in_ms: number[];
  is_explicit: boolean;
  dash_manifest: null;
  has_lyrics: boolean;
  audio_asset_id: string;
  duration_in_ms: number;
  dark_message: null;
  allows_saving: boolean;
  territory_validity_periods: TerritoryValidityPeriods;
  ig_username: null | string;
}

export interface TerritoryValidityPeriods {
}

export interface MusicConsumptionInfo {
  ig_artist: IgArtistClass | null;
  placeholder_profile_pic_url: string;
  should_mute_audio: boolean;
  should_mute_audio_reason: string;
  should_mute_audio_reason_type: null;
  is_bookmarked: boolean;
  overlap_duration_in_ms: number;
  audio_asset_start_time_in_ms: number;
  allow_media_creation_with_music: boolean;
  is_trending_in_clips: boolean;
  trend_rank: null;
  formatted_clips_media_count: null;
  display_labels: null;
  should_allow_music_editing: boolean;
  derived_content_id: null;
}

export interface IgArtistClass {
  pk: string;
  pk_id: string;
  username: string;
  full_name: string;
  is_private: boolean;
  is_verified: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
  strong_id__: string;
  profile_grid_display_type?: string;
}

export interface CommentInformTreatment {
  should_have_inform_treatment: boolean;
  text: string;
  url: null;
  action_type: null;
}

export interface ItemImageVersions2 {
  candidates: FirstFrame[];
  additional_candidates: AdditionalCandidates;
  smart_thumbnail_enabled: boolean;
  scrubber_spritesheet_info_candidates: ScrubberSpritesheetInfoCandidates;
}

export interface AdditionalCandidates {
  igtv_first_frame: FirstFrame;
  first_frame: FirstFrame;
  smart_frame: null;
}

export interface ScrubberSpritesheetInfoCandidates {
  default: Default;
}

export interface Default {
  video_length: number;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_duration: number;
  sprite_urls: string[];
  thumbnails_per_row: number;
  total_thumbnail_num_per_sprite: number;
  max_thumbnails_per_sprite: number;
  sprite_width: number;
  sprite_height: number;
  rendered_width: number;
  file_size_kb: number;
}

export enum InlineComposerDisplayCondition {
  ImpressionTrigger = 'impression_trigger',
}

export enum IntegrityReviewDecision {
  Pending = 'pending',
}

export interface Location {
  pk: string;
  short_name: string;
  facebook_places_id: string;
  external_source: string;
  name: string;
  address: string;
  city: string;
  has_viewer_saved: boolean;
  lng: number;
  lat: number;
  is_eligible_for_guides: boolean;
}

export interface MediaCroppingInfo {
  square_crop: SquareCrop;
}

export interface SquareCrop {
  crop_left: number;
  crop_right: number;
  crop_top: number;
  crop_bottom: number;
}

export interface MusicMetadata {
  music_canonical_id: string;
  audio_type: null;
  music_info: null;
  original_sound_info: null;
  pinned_media_ids: null;
}

export enum TopLiker {
  MenLasstore = 'men.lasstore',
  OrestHarmash = 'orest_harmash',
}

export interface VideoVersion {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
