// TODO - Table

export interface HeaderPageContent {
  title: string
  shortDescription: string
  imageDid: string
  imageDescription: string
  sdgs: string[]
  company: string
  country: string
  uploadingImage: boolean
}

export interface BodyPageContent {
  id: string
  title: string
  content: string
  imageDid: string
  uploadingImage: boolean
}

export interface ImagePageContent {
  id: string
  title: string
  content: string
  imageDid: string
  imageDescription: string
  uploadingImage: boolean
}

export interface VideoPageContent {
  id: string
  title: string
  content: string
  videoDid: string
  uploadingVideo: boolean
}

export interface ProfilePageContent {
  id: string
  name: string
  position: string
  linkedInUrl: string
  twitterUrl: string
  imageDid: string
  uploadingImage: boolean
}

export interface SocialPageContent {
  linkedInUrl: string
  facebookUrl: string
  twitterUrl: string
  discourseUrl: string
  instagramUrl: string
  telegramUrl: string
  githubUrl: string
  otherUrl: string
}

export interface EmbeddedPageContent {
  id: string
  title: string
  urls: string[]
}

export interface CreateEntityPageContentState {
  header: HeaderPageContent
  body: {
    [id: string]: BodyPageContent
  }
  images: {
    [id: string]: ImagePageContent
  }
  videos: {
    [id: string]: VideoPageContent
  }
  profiles: {
    [id: string]: ProfilePageContent
  }
  social: SocialPageContent
  embedded: {
    [id: string]: EmbeddedPageContent
  }
}

export enum CreateEntityPageContentActions {
  // Header
  UpdateHeaderContent = 'ixo/CreateEntityPageContent/UPDATE_HEADER',
  UploadHeaderContentImage = 'ixo/CreateEntityPageContent/UPLOAD_HEADER_IMAGE',
  UploadHeaderContentImagePending = 'ixo/CreateEntityPageContent/UPLOAD_HEADER_IMAGE_PENDING',
  UploadHeaderContentImageSuccess = 'ixo/CreateEntityPageContent/UPLOAD_HEADER_IMAGE_FULFILLED',
  UploadHeaderContentImageFailure = 'ixo/CreateEntityPageContent/UPLOAD_HEADER_IMAGE_REJECTED',
  // Body
  AddBodySection = 'ixo/CreateEntityPageContent/ADD_BODY_SECTION',
  RemoveBodySection = 'ixo/CreateEntityPageContent/REMOVE_BODY_SECTION',
  UpdateBodyContent = 'ixo/CreateEntityPageContent/UPDATE_BODY',
  UploadBodyContentImage = 'ixo/CreateEntityPageContent/UPLOAD_BODY_IMAGE',
  UploadBodyContentImagePending = 'ixo/CreateEntityPageContent/UPLOAD_BODY_IMAGE_PENDING',
  UploadBodyContentImageSuccess = 'ixo/CreateEntityPageContent/UPLOAD_BODY_IMAGE_FULFILLED',
  UploadBodyContentImageFailure = 'ixo/CreateEntityPageContent/UPLOAD_BODY_IMAGE_REJECTED',
  // Image
  AddImageSection = 'ixo/CreateEntityPageContent/ADD_IMAGE_SECTION',
  RemoveImageSection = 'ixo/CreateEntityPageContent/REMOVE_IMAGE_SECTION',
  UpdateImageContent = 'ixo/CreateEntityPageContent/UPDATE_IMAGE',
  UploadImageContentImage = 'ixo/CreateEntityPageContent/UPLOAD_IMAGE_IMAGE',
  UploadImageContentImagePending = 'ixo/CreateEntityPageContent/UPLOAD_IMAGE_IMAGE_PENDING',
  UploadImageContentImageSuccess = 'ixo/CreateEntityPageContent/UPLOAD_IMAGE_IMAGE_FULFILLED',
  UploadImageContentImageFailure = 'ixo/CreateEntityPageContent/UPLOAD_IMAGE_IMAGE_REJECTED',
  // Video
  AddVideoSection = 'ixo/CreateEntityPageContent/ADD_VIDEO_SECTION',
  RemoveVideoSection = 'ixo/CreateEntityPageContent/REMOVE_VIDEO_SECTION',
  UpdateVideoContent = 'ixo/CreateEntityPageContent/UPDATE_VIDEO',
  UploadVideoContentVideo = 'ixo/CreateEntityPageContent/UPLOAD_VIDEO_VIDEO',
  UploadVideoContentVideoPending = 'ixo/CreateEntityPageContent/UPLOAD_VIDEO_VIDEO_PENDING',
  UploadVideoContentVideoSuccess = 'ixo/CreateEntityPageContent/UPLOAD_VIDEO_VIDEO_FULFILLED',
  UploadVideoContentVideoFailure = 'ixo/CreateEntityPageContent/UPLOAD_VIDEO_VIDEO_REJECTED',
  // Profile
  AddProfileSection = 'ixo/CreateEntityPageContent/ADD_PROFILE_SECTION',
  RemoveProfileSection = 'ixo/CreateEntityPageContent/REMOVE_PROFILE_SECTION',
  UpdateProfileContent = 'ixo/CreateEntityPageContent/UPDATE_PROFILE',
  UploadProfileContentImage = 'ixo/CreateEntityPageContent/UPLOAD_PROFILE_IMAGE',
  UploadProfileContentImagePending = 'ixo/CreateEntityPageContent/UPLOAD_PROFILE_IMAGE_PENDING',
  UploadProfileContentImageSuccess = 'ixo/CreateEntityPageContent/UPLOAD_PROFILE_IMAGE_FULFILLED',
  UploadProfileContentImageFailure = 'ixo/CreateEntityPageContent/UPLOAD_PROFILE_IMAGE_REJECTED',
  // Social
  UpdateSocialContent = 'ixo/CreateEntityPageContent/UPDATE_SOCIAL',
  // Embedded
  AddEmbeddedSection = 'ixo/CreateEntityPageContent/ADD_EMBEDDED_SECTION',
  RemoveEmbeddedSection = 'ixo/CreateEntityPageContent/REMOVE_EMBEDDED_SECTION',
  UpdateEmbeddedContent = 'ixo/CreateEntityPageContent/UPDATE_EMBEDDED',
}

export interface UpdateHeaderContentAction {
  type: typeof CreateEntityPageContentActions.UpdateHeaderContent
  payload: {
    title: string
    shortDescription: string
    imageDescription: string
    sdgs: string[]
    company: string
    country: string
  }
}

export interface UploadHeaderImageAction {
  type: typeof CreateEntityPageContentActions.UploadHeaderContentImage
  payload: Promise<{
    did: string
  }>
}

export interface UploadHeaderImagePendingAction {
  type: typeof CreateEntityPageContentActions.UploadHeaderContentImagePending
}

export interface UploadHeaderImageSuccessAction {
  type: typeof CreateEntityPageContentActions.UploadHeaderContentImageSuccess
  payload: {
    did: string
  }
}

export interface UploadHeaderImageFailureAction {
  type: typeof CreateEntityPageContentActions.UploadHeaderContentImageFailure
}

export interface AddBodySectionAction {
  type: typeof CreateEntityPageContentActions.AddBodySection
  payload: {
    id: string
    title: string
    content: string
    imageDid: string
  }
}

export interface RemoveBodySectionAction {
  type: typeof CreateEntityPageContentActions.RemoveBodySection
  payload: {
    id: string
  }
}

export interface UpdateBodyContentAction {
  type: typeof CreateEntityPageContentActions.UpdateBodyContent
  payload: {
    id: string
    title: string
    content: string
  }
}

export interface UploadBodyContentImageAction {
  type: typeof CreateEntityPageContentActions.UploadBodyContentImage
  payload: Promise<{
    id: string
    did: string
  }>
}

export interface UploadBodyContentImagePendingAction {
  type: typeof CreateEntityPageContentActions.UploadBodyContentImagePending
  meta: {
    id: string
  }
}

export interface UploadBodyContentImageSuccessAction {
  type: typeof CreateEntityPageContentActions.UploadBodyContentImageSuccess
  payload: {
    id: string
    did: string
  }
}

export interface UploadBodyContentImageFailureAction {
  type: typeof CreateEntityPageContentActions.UploadBodyContentImageFailure
  payload: {
    id: string
  }
}

export interface AddImageSectionAction {
  type: typeof CreateEntityPageContentActions.AddImageSection
  payload: {
    id: string
    title: string
    content: string
    imageDid: string
    imageDescription: string
  }
}

export interface RemoveImageSectionAction {
  type: typeof CreateEntityPageContentActions.RemoveImageSection
  payload: {
    id: string
  }
}

export interface UpdateImageContentAction {
  type: typeof CreateEntityPageContentActions.UpdateImageContent
  payload: {
    id: string
    title: string
    content: string
    imageDescription: string
  }
}

export interface UploadImageContentImageAction {
  type: typeof CreateEntityPageContentActions.UploadImageContentImage
  payload: Promise<{
    id: string
    did: string
  }>
}

export interface UploadImageContentImagePendingAction {
  type: typeof CreateEntityPageContentActions.UploadImageContentImagePending
  meta: {
    id: string
  }
}

export interface UploadImageContentImageSuccessAction {
  type: typeof CreateEntityPageContentActions.UploadImageContentImageSuccess
  payload: {
    id: string
    did: string
  }
}

export interface UploadImageContentImageFailureAction {
  type: typeof CreateEntityPageContentActions.UploadImageContentImageFailure
  payload: {
    id: string
  }
}

export interface AddVideoSectionAction {
  type: typeof CreateEntityPageContentActions.AddVideoSection
  payload: {
    id: string
    title: string
    content: string
    videoDid: string
  }
}

export interface RemoveVideoSectionAction {
  type: typeof CreateEntityPageContentActions.RemoveVideoSection
  payload: {
    id: string
  }
}

export interface UpdateVideoContentAction {
  type: typeof CreateEntityPageContentActions.UpdateVideoContent
  payload: {
    id: string
    title: string
    content: string
  }
}

export interface UploadVideoContentVideoAction {
  type: typeof CreateEntityPageContentActions.UploadVideoContentVideo
  payload: Promise<{
    id: string
    did: string
  }>
}

export interface UploadVideoContentVideoPendingAction {
  type: typeof CreateEntityPageContentActions.UploadVideoContentVideoPending
  meta: {
    id: string
  }
}

export interface UploadVideoContentVideoSuccessAction {
  type: typeof CreateEntityPageContentActions.UploadVideoContentVideoSuccess
  payload: {
    id: string
    did: string
  }
}

export interface UploadVideoContentVideoFailureAction {
  type: typeof CreateEntityPageContentActions.UploadVideoContentVideoFailure
  payload: {
    id: string
  }
}

export interface AddProfileSectionAction {
  type: typeof CreateEntityPageContentActions.AddProfileSection
  payload: {
    id: string
    name: string
    position: string
    linkedInUrl: string
    twitterUrl: string
    imageDid: string
  }
}

export interface RemoveProfileSectionAction {
  type: typeof CreateEntityPageContentActions.RemoveProfileSection
  payload: {
    id: string
  }
}

export interface UpdateProfileContentAction {
  type: typeof CreateEntityPageContentActions.UpdateProfileContent
  payload: {
    id: string
    name: string
    position: string
    linkedInUrl: string
    twitterUrl: string
  }
}

export interface UploadProfileContentImageAction {
  type: typeof CreateEntityPageContentActions.UploadProfileContentImage
  payload: Promise<{
    id: string
    did: string
  }>
}

export interface UploadProfileContentImagePendingAction {
  type: typeof CreateEntityPageContentActions.UploadProfileContentImagePending
  meta: {
    id: string
  }
}

export interface UploadProfileContentImageSuccessAction {
  type: typeof CreateEntityPageContentActions.UploadProfileContentImageSuccess
  payload: {
    id: string
    did: string
  }
}

export interface UploadProfileContentImageFailureAction {
  type: typeof CreateEntityPageContentActions.UploadProfileContentImageFailure
  payload: {
    id: string
  }
}

export interface UpdateSocialContentAction {
  type: typeof CreateEntityPageContentActions.UpdateSocialContent
  payload: {
    linkedInUrl: string
    facebookUrl: string
    twitterUrl: string
    discourseUrl: string
    instagramUrl: string
    telegramUrl: string
    githubUrl: string
    otherUrl: string
  }
}

export interface AddEmbeddedSectionAction {
  type: typeof CreateEntityPageContentActions.AddEmbeddedSection
  payload: {
    id: string
    title: string
    urls: string[]
  }
}

export interface RemoveEmbeddedSectionAction {
  type: typeof CreateEntityPageContentActions.RemoveEmbeddedSection
  payload: {
    id: string
  }
}

export interface UpdateEmbeddedContentAction {
  type: typeof CreateEntityPageContentActions.UpdateEmbeddedContent
  payload: {
    id: string
    title: string
    urls: string[]
  }
}

export type CreateEntityPageContentActionTypes =
  | UpdateHeaderContentAction
  | UploadHeaderImageAction
  | UploadHeaderImagePendingAction
  | UploadHeaderImageSuccessAction
  | UploadHeaderImageFailureAction
  | AddBodySectionAction
  | RemoveBodySectionAction
  | UpdateBodyContentAction
  | UploadBodyContentImageAction
  | UploadBodyContentImagePendingAction
  | UploadBodyContentImageSuccessAction
  | UploadBodyContentImageFailureAction
  | AddImageSectionAction
  | RemoveImageSectionAction
  | UpdateImageContentAction
  | UploadImageContentImageAction
  | UploadImageContentImagePendingAction
  | UploadImageContentImageSuccessAction
  | UploadImageContentImageFailureAction
  | AddVideoSectionAction
  | RemoveVideoSectionAction
  | UpdateVideoContentAction
  | UploadVideoContentVideoAction
  | UploadVideoContentVideoPendingAction
  | UploadVideoContentVideoSuccessAction
  | UploadVideoContentVideoFailureAction
  | AddProfileSectionAction
  | RemoveProfileSectionAction
  | UpdateProfileContentAction
  | UploadProfileContentImageAction
  | UploadProfileContentImagePendingAction
  | UploadProfileContentImageSuccessAction
  | UploadProfileContentImageFailureAction
  | UpdateSocialContentAction
  | AddEmbeddedSectionAction
  | RemoveEmbeddedSectionAction
  | UpdateEmbeddedContentAction