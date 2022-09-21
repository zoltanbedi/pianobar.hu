export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type DataJson */
  childrenDataJson?: Maybe<Array<Maybe<DataJson>>>;
  /** Returns the first child node of type DataJson or null if there are no children of given type on this node */
  childDataJson?: Maybe<DataJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type DataJson = Node & {
  data?: Maybe<DataJson>;
  featuredImg?: Maybe<File>;
  attachments?: Maybe<DataJsonAttachments>;
  message?: Maybe<Scalars['String']>;
  full_picture?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  from?: Maybe<DataJsonFrom>;
  actions?: Maybe<Array<Maybe<DataJsonActions>>>;
  created_time?: Maybe<Scalars['Date']>;
  status_type?: Maybe<Scalars['String']>;
  updated_time?: Maybe<Scalars['Date']>;
  icon?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  full_res_picture?: Maybe<Scalars['String']>;
  first_action?: Maybe<DataJsonFirst_Action>;
  jsonId?: Maybe<Scalars['String']>;
  fields?: Maybe<DataJsonFields>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DataJsonCreated_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DataJsonUpdated_TimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DataJsonAttachments = {
  data?: Maybe<Array<Maybe<DataJsonAttachmentsData>>>;
};

export type DataJsonAttachmentsData = {
  media?: Maybe<DataJsonAttachmentsDataMedia>;
  media_type?: Maybe<Scalars['String']>;
  target?: Maybe<DataJsonAttachmentsDataTarget>;
  unshimmed_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type DataJsonAttachmentsDataMedia = {
  image?: Maybe<DataJsonAttachmentsDataMediaImage>;
  source?: Maybe<Scalars['String']>;
};

export type DataJsonAttachmentsDataMediaImage = {
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type DataJsonAttachmentsDataTarget = {
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DataJsonFrom = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type DataJsonActions = {
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type DataJsonFirst_Action = {
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type DataJsonFields = {
  localFile?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  dataJson?: Maybe<DataJson>;
  allDataJson: DataJsonConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenDataJson?: InputMaybe<DataJsonFilterListInput>;
  childDataJson?: InputMaybe<DataJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDataJsonArgs = {
  data?: InputMaybe<DataJsonFilterInput>;
  featuredImg?: InputMaybe<FileFilterInput>;
  attachments?: InputMaybe<DataJsonAttachmentsFilterInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
  full_picture?: InputMaybe<StringQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  from?: InputMaybe<DataJsonFromFilterInput>;
  actions?: InputMaybe<DataJsonActionsFilterListInput>;
  created_time?: InputMaybe<DateQueryOperatorInput>;
  status_type?: InputMaybe<StringQueryOperatorInput>;
  updated_time?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  full_res_picture?: InputMaybe<StringQueryOperatorInput>;
  first_action?: InputMaybe<DataJsonFirst_ActionFilterInput>;
  jsonId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<DataJsonFieldsFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDataJsonArgs = {
  filter?: InputMaybe<DataJsonFilterInput>;
  sort?: InputMaybe<DataJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DataJsonFilterListInput = {
  elemMatch?: InputMaybe<DataJsonFilterInput>;
};

export type DataJsonFilterInput = {
  data?: InputMaybe<DataJsonFilterInput>;
  featuredImg?: InputMaybe<FileFilterInput>;
  attachments?: InputMaybe<DataJsonAttachmentsFilterInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
  full_picture?: InputMaybe<StringQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  from?: InputMaybe<DataJsonFromFilterInput>;
  actions?: InputMaybe<DataJsonActionsFilterListInput>;
  created_time?: InputMaybe<DateQueryOperatorInput>;
  status_type?: InputMaybe<StringQueryOperatorInput>;
  updated_time?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  full_res_picture?: InputMaybe<StringQueryOperatorInput>;
  first_action?: InputMaybe<DataJsonFirst_ActionFilterInput>;
  jsonId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<DataJsonFieldsFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenDataJson?: InputMaybe<DataJsonFilterListInput>;
  childDataJson?: InputMaybe<DataJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DataJsonAttachmentsFilterInput = {
  data?: InputMaybe<DataJsonAttachmentsDataFilterListInput>;
};

export type DataJsonAttachmentsDataFilterListInput = {
  elemMatch?: InputMaybe<DataJsonAttachmentsDataFilterInput>;
};

export type DataJsonAttachmentsDataFilterInput = {
  media?: InputMaybe<DataJsonAttachmentsDataMediaFilterInput>;
  media_type?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<DataJsonAttachmentsDataTargetFilterInput>;
  unshimmed_url?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type DataJsonAttachmentsDataMediaFilterInput = {
  image?: InputMaybe<DataJsonAttachmentsDataMediaImageFilterInput>;
  source?: InputMaybe<StringQueryOperatorInput>;
};

export type DataJsonAttachmentsDataMediaImageFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type DataJsonAttachmentsDataTargetFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type DataJsonFromFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type DataJsonActionsFilterListInput = {
  elemMatch?: InputMaybe<DataJsonActionsFilterInput>;
};

export type DataJsonActionsFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
};

export type DataJsonFirst_ActionFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
};

export type DataJsonFieldsFilterInput = {
  localFile?: InputMaybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___parent___internal___contentFilePath'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___children___internal___contentFilePath'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childrenImageSharp___internal___contentFilePath'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___parent___internal___contentFilePath'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___children___internal___contentFilePath'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childImageSharp___internal___contentFilePath'
  | 'childrenDataJson'
  | 'childrenDataJson___data___data___message'
  | 'childrenDataJson___data___data___full_picture'
  | 'childrenDataJson___data___data___picture'
  | 'childrenDataJson___data___data___actions'
  | 'childrenDataJson___data___data___created_time'
  | 'childrenDataJson___data___data___status_type'
  | 'childrenDataJson___data___data___updated_time'
  | 'childrenDataJson___data___data___icon'
  | 'childrenDataJson___data___data___type'
  | 'childrenDataJson___data___data___link'
  | 'childrenDataJson___data___data___full_res_picture'
  | 'childrenDataJson___data___data___jsonId'
  | 'childrenDataJson___data___data___description'
  | 'childrenDataJson___data___data___id'
  | 'childrenDataJson___data___data___children'
  | 'childrenDataJson___data___featuredImg___sourceInstanceName'
  | 'childrenDataJson___data___featuredImg___absolutePath'
  | 'childrenDataJson___data___featuredImg___relativePath'
  | 'childrenDataJson___data___featuredImg___extension'
  | 'childrenDataJson___data___featuredImg___size'
  | 'childrenDataJson___data___featuredImg___prettySize'
  | 'childrenDataJson___data___featuredImg___modifiedTime'
  | 'childrenDataJson___data___featuredImg___accessTime'
  | 'childrenDataJson___data___featuredImg___changeTime'
  | 'childrenDataJson___data___featuredImg___birthTime'
  | 'childrenDataJson___data___featuredImg___root'
  | 'childrenDataJson___data___featuredImg___dir'
  | 'childrenDataJson___data___featuredImg___base'
  | 'childrenDataJson___data___featuredImg___ext'
  | 'childrenDataJson___data___featuredImg___name'
  | 'childrenDataJson___data___featuredImg___relativeDirectory'
  | 'childrenDataJson___data___featuredImg___dev'
  | 'childrenDataJson___data___featuredImg___mode'
  | 'childrenDataJson___data___featuredImg___nlink'
  | 'childrenDataJson___data___featuredImg___uid'
  | 'childrenDataJson___data___featuredImg___gid'
  | 'childrenDataJson___data___featuredImg___rdev'
  | 'childrenDataJson___data___featuredImg___ino'
  | 'childrenDataJson___data___featuredImg___atimeMs'
  | 'childrenDataJson___data___featuredImg___mtimeMs'
  | 'childrenDataJson___data___featuredImg___ctimeMs'
  | 'childrenDataJson___data___featuredImg___atime'
  | 'childrenDataJson___data___featuredImg___mtime'
  | 'childrenDataJson___data___featuredImg___ctime'
  | 'childrenDataJson___data___featuredImg___birthtime'
  | 'childrenDataJson___data___featuredImg___birthtimeMs'
  | 'childrenDataJson___data___featuredImg___blksize'
  | 'childrenDataJson___data___featuredImg___blocks'
  | 'childrenDataJson___data___featuredImg___url'
  | 'childrenDataJson___data___featuredImg___publicURL'
  | 'childrenDataJson___data___featuredImg___childrenImageSharp'
  | 'childrenDataJson___data___featuredImg___childrenDataJson'
  | 'childrenDataJson___data___featuredImg___id'
  | 'childrenDataJson___data___featuredImg___children'
  | 'childrenDataJson___data___attachments___data'
  | 'childrenDataJson___data___message'
  | 'childrenDataJson___data___full_picture'
  | 'childrenDataJson___data___picture'
  | 'childrenDataJson___data___from___name'
  | 'childrenDataJson___data___from___id'
  | 'childrenDataJson___data___actions'
  | 'childrenDataJson___data___actions___name'
  | 'childrenDataJson___data___actions___link'
  | 'childrenDataJson___data___created_time'
  | 'childrenDataJson___data___status_type'
  | 'childrenDataJson___data___updated_time'
  | 'childrenDataJson___data___icon'
  | 'childrenDataJson___data___type'
  | 'childrenDataJson___data___link'
  | 'childrenDataJson___data___full_res_picture'
  | 'childrenDataJson___data___first_action___name'
  | 'childrenDataJson___data___first_action___link'
  | 'childrenDataJson___data___jsonId'
  | 'childrenDataJson___data___fields___localFile'
  | 'childrenDataJson___data___description'
  | 'childrenDataJson___data___id'
  | 'childrenDataJson___data___parent___id'
  | 'childrenDataJson___data___parent___children'
  | 'childrenDataJson___data___children'
  | 'childrenDataJson___data___children___id'
  | 'childrenDataJson___data___children___children'
  | 'childrenDataJson___data___internal___content'
  | 'childrenDataJson___data___internal___contentDigest'
  | 'childrenDataJson___data___internal___description'
  | 'childrenDataJson___data___internal___fieldOwners'
  | 'childrenDataJson___data___internal___ignoreType'
  | 'childrenDataJson___data___internal___mediaType'
  | 'childrenDataJson___data___internal___owner'
  | 'childrenDataJson___data___internal___type'
  | 'childrenDataJson___data___internal___contentFilePath'
  | 'childrenDataJson___featuredImg___sourceInstanceName'
  | 'childrenDataJson___featuredImg___absolutePath'
  | 'childrenDataJson___featuredImg___relativePath'
  | 'childrenDataJson___featuredImg___extension'
  | 'childrenDataJson___featuredImg___size'
  | 'childrenDataJson___featuredImg___prettySize'
  | 'childrenDataJson___featuredImg___modifiedTime'
  | 'childrenDataJson___featuredImg___accessTime'
  | 'childrenDataJson___featuredImg___changeTime'
  | 'childrenDataJson___featuredImg___birthTime'
  | 'childrenDataJson___featuredImg___root'
  | 'childrenDataJson___featuredImg___dir'
  | 'childrenDataJson___featuredImg___base'
  | 'childrenDataJson___featuredImg___ext'
  | 'childrenDataJson___featuredImg___name'
  | 'childrenDataJson___featuredImg___relativeDirectory'
  | 'childrenDataJson___featuredImg___dev'
  | 'childrenDataJson___featuredImg___mode'
  | 'childrenDataJson___featuredImg___nlink'
  | 'childrenDataJson___featuredImg___uid'
  | 'childrenDataJson___featuredImg___gid'
  | 'childrenDataJson___featuredImg___rdev'
  | 'childrenDataJson___featuredImg___ino'
  | 'childrenDataJson___featuredImg___atimeMs'
  | 'childrenDataJson___featuredImg___mtimeMs'
  | 'childrenDataJson___featuredImg___ctimeMs'
  | 'childrenDataJson___featuredImg___atime'
  | 'childrenDataJson___featuredImg___mtime'
  | 'childrenDataJson___featuredImg___ctime'
  | 'childrenDataJson___featuredImg___birthtime'
  | 'childrenDataJson___featuredImg___birthtimeMs'
  | 'childrenDataJson___featuredImg___blksize'
  | 'childrenDataJson___featuredImg___blocks'
  | 'childrenDataJson___featuredImg___url'
  | 'childrenDataJson___featuredImg___publicURL'
  | 'childrenDataJson___featuredImg___childrenImageSharp'
  | 'childrenDataJson___featuredImg___childrenImageSharp___gatsbyImageData'
  | 'childrenDataJson___featuredImg___childrenImageSharp___id'
  | 'childrenDataJson___featuredImg___childrenImageSharp___children'
  | 'childrenDataJson___featuredImg___childImageSharp___gatsbyImageData'
  | 'childrenDataJson___featuredImg___childImageSharp___id'
  | 'childrenDataJson___featuredImg___childImageSharp___children'
  | 'childrenDataJson___featuredImg___childrenDataJson'
  | 'childrenDataJson___featuredImg___childrenDataJson___message'
  | 'childrenDataJson___featuredImg___childrenDataJson___full_picture'
  | 'childrenDataJson___featuredImg___childrenDataJson___picture'
  | 'childrenDataJson___featuredImg___childrenDataJson___actions'
  | 'childrenDataJson___featuredImg___childrenDataJson___created_time'
  | 'childrenDataJson___featuredImg___childrenDataJson___status_type'
  | 'childrenDataJson___featuredImg___childrenDataJson___updated_time'
  | 'childrenDataJson___featuredImg___childrenDataJson___icon'
  | 'childrenDataJson___featuredImg___childrenDataJson___type'
  | 'childrenDataJson___featuredImg___childrenDataJson___link'
  | 'childrenDataJson___featuredImg___childrenDataJson___full_res_picture'
  | 'childrenDataJson___featuredImg___childrenDataJson___jsonId'
  | 'childrenDataJson___featuredImg___childrenDataJson___description'
  | 'childrenDataJson___featuredImg___childrenDataJson___id'
  | 'childrenDataJson___featuredImg___childrenDataJson___children'
  | 'childrenDataJson___featuredImg___childDataJson___message'
  | 'childrenDataJson___featuredImg___childDataJson___full_picture'
  | 'childrenDataJson___featuredImg___childDataJson___picture'
  | 'childrenDataJson___featuredImg___childDataJson___actions'
  | 'childrenDataJson___featuredImg___childDataJson___created_time'
  | 'childrenDataJson___featuredImg___childDataJson___status_type'
  | 'childrenDataJson___featuredImg___childDataJson___updated_time'
  | 'childrenDataJson___featuredImg___childDataJson___icon'
  | 'childrenDataJson___featuredImg___childDataJson___type'
  | 'childrenDataJson___featuredImg___childDataJson___link'
  | 'childrenDataJson___featuredImg___childDataJson___full_res_picture'
  | 'childrenDataJson___featuredImg___childDataJson___jsonId'
  | 'childrenDataJson___featuredImg___childDataJson___description'
  | 'childrenDataJson___featuredImg___childDataJson___id'
  | 'childrenDataJson___featuredImg___childDataJson___children'
  | 'childrenDataJson___featuredImg___id'
  | 'childrenDataJson___featuredImg___parent___id'
  | 'childrenDataJson___featuredImg___parent___children'
  | 'childrenDataJson___featuredImg___children'
  | 'childrenDataJson___featuredImg___children___id'
  | 'childrenDataJson___featuredImg___children___children'
  | 'childrenDataJson___featuredImg___internal___content'
  | 'childrenDataJson___featuredImg___internal___contentDigest'
  | 'childrenDataJson___featuredImg___internal___description'
  | 'childrenDataJson___featuredImg___internal___fieldOwners'
  | 'childrenDataJson___featuredImg___internal___ignoreType'
  | 'childrenDataJson___featuredImg___internal___mediaType'
  | 'childrenDataJson___featuredImg___internal___owner'
  | 'childrenDataJson___featuredImg___internal___type'
  | 'childrenDataJson___featuredImg___internal___contentFilePath'
  | 'childrenDataJson___attachments___data'
  | 'childrenDataJson___attachments___data___media_type'
  | 'childrenDataJson___attachments___data___unshimmed_url'
  | 'childrenDataJson___attachments___data___description'
  | 'childrenDataJson___attachments___data___title'
  | 'childrenDataJson___message'
  | 'childrenDataJson___full_picture'
  | 'childrenDataJson___picture'
  | 'childrenDataJson___from___name'
  | 'childrenDataJson___from___id'
  | 'childrenDataJson___actions'
  | 'childrenDataJson___actions___name'
  | 'childrenDataJson___actions___link'
  | 'childrenDataJson___created_time'
  | 'childrenDataJson___status_type'
  | 'childrenDataJson___updated_time'
  | 'childrenDataJson___icon'
  | 'childrenDataJson___type'
  | 'childrenDataJson___link'
  | 'childrenDataJson___full_res_picture'
  | 'childrenDataJson___first_action___name'
  | 'childrenDataJson___first_action___link'
  | 'childrenDataJson___jsonId'
  | 'childrenDataJson___fields___localFile'
  | 'childrenDataJson___description'
  | 'childrenDataJson___id'
  | 'childrenDataJson___parent___id'
  | 'childrenDataJson___parent___parent___id'
  | 'childrenDataJson___parent___parent___children'
  | 'childrenDataJson___parent___children'
  | 'childrenDataJson___parent___children___id'
  | 'childrenDataJson___parent___children___children'
  | 'childrenDataJson___parent___internal___content'
  | 'childrenDataJson___parent___internal___contentDigest'
  | 'childrenDataJson___parent___internal___description'
  | 'childrenDataJson___parent___internal___fieldOwners'
  | 'childrenDataJson___parent___internal___ignoreType'
  | 'childrenDataJson___parent___internal___mediaType'
  | 'childrenDataJson___parent___internal___owner'
  | 'childrenDataJson___parent___internal___type'
  | 'childrenDataJson___parent___internal___contentFilePath'
  | 'childrenDataJson___children'
  | 'childrenDataJson___children___id'
  | 'childrenDataJson___children___parent___id'
  | 'childrenDataJson___children___parent___children'
  | 'childrenDataJson___children___children'
  | 'childrenDataJson___children___children___id'
  | 'childrenDataJson___children___children___children'
  | 'childrenDataJson___children___internal___content'
  | 'childrenDataJson___children___internal___contentDigest'
  | 'childrenDataJson___children___internal___description'
  | 'childrenDataJson___children___internal___fieldOwners'
  | 'childrenDataJson___children___internal___ignoreType'
  | 'childrenDataJson___children___internal___mediaType'
  | 'childrenDataJson___children___internal___owner'
  | 'childrenDataJson___children___internal___type'
  | 'childrenDataJson___children___internal___contentFilePath'
  | 'childrenDataJson___internal___content'
  | 'childrenDataJson___internal___contentDigest'
  | 'childrenDataJson___internal___description'
  | 'childrenDataJson___internal___fieldOwners'
  | 'childrenDataJson___internal___ignoreType'
  | 'childrenDataJson___internal___mediaType'
  | 'childrenDataJson___internal___owner'
  | 'childrenDataJson___internal___type'
  | 'childrenDataJson___internal___contentFilePath'
  | 'childDataJson___data___data___message'
  | 'childDataJson___data___data___full_picture'
  | 'childDataJson___data___data___picture'
  | 'childDataJson___data___data___actions'
  | 'childDataJson___data___data___created_time'
  | 'childDataJson___data___data___status_type'
  | 'childDataJson___data___data___updated_time'
  | 'childDataJson___data___data___icon'
  | 'childDataJson___data___data___type'
  | 'childDataJson___data___data___link'
  | 'childDataJson___data___data___full_res_picture'
  | 'childDataJson___data___data___jsonId'
  | 'childDataJson___data___data___description'
  | 'childDataJson___data___data___id'
  | 'childDataJson___data___data___children'
  | 'childDataJson___data___featuredImg___sourceInstanceName'
  | 'childDataJson___data___featuredImg___absolutePath'
  | 'childDataJson___data___featuredImg___relativePath'
  | 'childDataJson___data___featuredImg___extension'
  | 'childDataJson___data___featuredImg___size'
  | 'childDataJson___data___featuredImg___prettySize'
  | 'childDataJson___data___featuredImg___modifiedTime'
  | 'childDataJson___data___featuredImg___accessTime'
  | 'childDataJson___data___featuredImg___changeTime'
  | 'childDataJson___data___featuredImg___birthTime'
  | 'childDataJson___data___featuredImg___root'
  | 'childDataJson___data___featuredImg___dir'
  | 'childDataJson___data___featuredImg___base'
  | 'childDataJson___data___featuredImg___ext'
  | 'childDataJson___data___featuredImg___name'
  | 'childDataJson___data___featuredImg___relativeDirectory'
  | 'childDataJson___data___featuredImg___dev'
  | 'childDataJson___data___featuredImg___mode'
  | 'childDataJson___data___featuredImg___nlink'
  | 'childDataJson___data___featuredImg___uid'
  | 'childDataJson___data___featuredImg___gid'
  | 'childDataJson___data___featuredImg___rdev'
  | 'childDataJson___data___featuredImg___ino'
  | 'childDataJson___data___featuredImg___atimeMs'
  | 'childDataJson___data___featuredImg___mtimeMs'
  | 'childDataJson___data___featuredImg___ctimeMs'
  | 'childDataJson___data___featuredImg___atime'
  | 'childDataJson___data___featuredImg___mtime'
  | 'childDataJson___data___featuredImg___ctime'
  | 'childDataJson___data___featuredImg___birthtime'
  | 'childDataJson___data___featuredImg___birthtimeMs'
  | 'childDataJson___data___featuredImg___blksize'
  | 'childDataJson___data___featuredImg___blocks'
  | 'childDataJson___data___featuredImg___url'
  | 'childDataJson___data___featuredImg___publicURL'
  | 'childDataJson___data___featuredImg___childrenImageSharp'
  | 'childDataJson___data___featuredImg___childrenDataJson'
  | 'childDataJson___data___featuredImg___id'
  | 'childDataJson___data___featuredImg___children'
  | 'childDataJson___data___attachments___data'
  | 'childDataJson___data___message'
  | 'childDataJson___data___full_picture'
  | 'childDataJson___data___picture'
  | 'childDataJson___data___from___name'
  | 'childDataJson___data___from___id'
  | 'childDataJson___data___actions'
  | 'childDataJson___data___actions___name'
  | 'childDataJson___data___actions___link'
  | 'childDataJson___data___created_time'
  | 'childDataJson___data___status_type'
  | 'childDataJson___data___updated_time'
  | 'childDataJson___data___icon'
  | 'childDataJson___data___type'
  | 'childDataJson___data___link'
  | 'childDataJson___data___full_res_picture'
  | 'childDataJson___data___first_action___name'
  | 'childDataJson___data___first_action___link'
  | 'childDataJson___data___jsonId'
  | 'childDataJson___data___fields___localFile'
  | 'childDataJson___data___description'
  | 'childDataJson___data___id'
  | 'childDataJson___data___parent___id'
  | 'childDataJson___data___parent___children'
  | 'childDataJson___data___children'
  | 'childDataJson___data___children___id'
  | 'childDataJson___data___children___children'
  | 'childDataJson___data___internal___content'
  | 'childDataJson___data___internal___contentDigest'
  | 'childDataJson___data___internal___description'
  | 'childDataJson___data___internal___fieldOwners'
  | 'childDataJson___data___internal___ignoreType'
  | 'childDataJson___data___internal___mediaType'
  | 'childDataJson___data___internal___owner'
  | 'childDataJson___data___internal___type'
  | 'childDataJson___data___internal___contentFilePath'
  | 'childDataJson___featuredImg___sourceInstanceName'
  | 'childDataJson___featuredImg___absolutePath'
  | 'childDataJson___featuredImg___relativePath'
  | 'childDataJson___featuredImg___extension'
  | 'childDataJson___featuredImg___size'
  | 'childDataJson___featuredImg___prettySize'
  | 'childDataJson___featuredImg___modifiedTime'
  | 'childDataJson___featuredImg___accessTime'
  | 'childDataJson___featuredImg___changeTime'
  | 'childDataJson___featuredImg___birthTime'
  | 'childDataJson___featuredImg___root'
  | 'childDataJson___featuredImg___dir'
  | 'childDataJson___featuredImg___base'
  | 'childDataJson___featuredImg___ext'
  | 'childDataJson___featuredImg___name'
  | 'childDataJson___featuredImg___relativeDirectory'
  | 'childDataJson___featuredImg___dev'
  | 'childDataJson___featuredImg___mode'
  | 'childDataJson___featuredImg___nlink'
  | 'childDataJson___featuredImg___uid'
  | 'childDataJson___featuredImg___gid'
  | 'childDataJson___featuredImg___rdev'
  | 'childDataJson___featuredImg___ino'
  | 'childDataJson___featuredImg___atimeMs'
  | 'childDataJson___featuredImg___mtimeMs'
  | 'childDataJson___featuredImg___ctimeMs'
  | 'childDataJson___featuredImg___atime'
  | 'childDataJson___featuredImg___mtime'
  | 'childDataJson___featuredImg___ctime'
  | 'childDataJson___featuredImg___birthtime'
  | 'childDataJson___featuredImg___birthtimeMs'
  | 'childDataJson___featuredImg___blksize'
  | 'childDataJson___featuredImg___blocks'
  | 'childDataJson___featuredImg___url'
  | 'childDataJson___featuredImg___publicURL'
  | 'childDataJson___featuredImg___childrenImageSharp'
  | 'childDataJson___featuredImg___childrenImageSharp___gatsbyImageData'
  | 'childDataJson___featuredImg___childrenImageSharp___id'
  | 'childDataJson___featuredImg___childrenImageSharp___children'
  | 'childDataJson___featuredImg___childImageSharp___gatsbyImageData'
  | 'childDataJson___featuredImg___childImageSharp___id'
  | 'childDataJson___featuredImg___childImageSharp___children'
  | 'childDataJson___featuredImg___childrenDataJson'
  | 'childDataJson___featuredImg___childrenDataJson___message'
  | 'childDataJson___featuredImg___childrenDataJson___full_picture'
  | 'childDataJson___featuredImg___childrenDataJson___picture'
  | 'childDataJson___featuredImg___childrenDataJson___actions'
  | 'childDataJson___featuredImg___childrenDataJson___created_time'
  | 'childDataJson___featuredImg___childrenDataJson___status_type'
  | 'childDataJson___featuredImg___childrenDataJson___updated_time'
  | 'childDataJson___featuredImg___childrenDataJson___icon'
  | 'childDataJson___featuredImg___childrenDataJson___type'
  | 'childDataJson___featuredImg___childrenDataJson___link'
  | 'childDataJson___featuredImg___childrenDataJson___full_res_picture'
  | 'childDataJson___featuredImg___childrenDataJson___jsonId'
  | 'childDataJson___featuredImg___childrenDataJson___description'
  | 'childDataJson___featuredImg___childrenDataJson___id'
  | 'childDataJson___featuredImg___childrenDataJson___children'
  | 'childDataJson___featuredImg___childDataJson___message'
  | 'childDataJson___featuredImg___childDataJson___full_picture'
  | 'childDataJson___featuredImg___childDataJson___picture'
  | 'childDataJson___featuredImg___childDataJson___actions'
  | 'childDataJson___featuredImg___childDataJson___created_time'
  | 'childDataJson___featuredImg___childDataJson___status_type'
  | 'childDataJson___featuredImg___childDataJson___updated_time'
  | 'childDataJson___featuredImg___childDataJson___icon'
  | 'childDataJson___featuredImg___childDataJson___type'
  | 'childDataJson___featuredImg___childDataJson___link'
  | 'childDataJson___featuredImg___childDataJson___full_res_picture'
  | 'childDataJson___featuredImg___childDataJson___jsonId'
  | 'childDataJson___featuredImg___childDataJson___description'
  | 'childDataJson___featuredImg___childDataJson___id'
  | 'childDataJson___featuredImg___childDataJson___children'
  | 'childDataJson___featuredImg___id'
  | 'childDataJson___featuredImg___parent___id'
  | 'childDataJson___featuredImg___parent___children'
  | 'childDataJson___featuredImg___children'
  | 'childDataJson___featuredImg___children___id'
  | 'childDataJson___featuredImg___children___children'
  | 'childDataJson___featuredImg___internal___content'
  | 'childDataJson___featuredImg___internal___contentDigest'
  | 'childDataJson___featuredImg___internal___description'
  | 'childDataJson___featuredImg___internal___fieldOwners'
  | 'childDataJson___featuredImg___internal___ignoreType'
  | 'childDataJson___featuredImg___internal___mediaType'
  | 'childDataJson___featuredImg___internal___owner'
  | 'childDataJson___featuredImg___internal___type'
  | 'childDataJson___featuredImg___internal___contentFilePath'
  | 'childDataJson___attachments___data'
  | 'childDataJson___attachments___data___media_type'
  | 'childDataJson___attachments___data___unshimmed_url'
  | 'childDataJson___attachments___data___description'
  | 'childDataJson___attachments___data___title'
  | 'childDataJson___message'
  | 'childDataJson___full_picture'
  | 'childDataJson___picture'
  | 'childDataJson___from___name'
  | 'childDataJson___from___id'
  | 'childDataJson___actions'
  | 'childDataJson___actions___name'
  | 'childDataJson___actions___link'
  | 'childDataJson___created_time'
  | 'childDataJson___status_type'
  | 'childDataJson___updated_time'
  | 'childDataJson___icon'
  | 'childDataJson___type'
  | 'childDataJson___link'
  | 'childDataJson___full_res_picture'
  | 'childDataJson___first_action___name'
  | 'childDataJson___first_action___link'
  | 'childDataJson___jsonId'
  | 'childDataJson___fields___localFile'
  | 'childDataJson___description'
  | 'childDataJson___id'
  | 'childDataJson___parent___id'
  | 'childDataJson___parent___parent___id'
  | 'childDataJson___parent___parent___children'
  | 'childDataJson___parent___children'
  | 'childDataJson___parent___children___id'
  | 'childDataJson___parent___children___children'
  | 'childDataJson___parent___internal___content'
  | 'childDataJson___parent___internal___contentDigest'
  | 'childDataJson___parent___internal___description'
  | 'childDataJson___parent___internal___fieldOwners'
  | 'childDataJson___parent___internal___ignoreType'
  | 'childDataJson___parent___internal___mediaType'
  | 'childDataJson___parent___internal___owner'
  | 'childDataJson___parent___internal___type'
  | 'childDataJson___parent___internal___contentFilePath'
  | 'childDataJson___children'
  | 'childDataJson___children___id'
  | 'childDataJson___children___parent___id'
  | 'childDataJson___children___parent___children'
  | 'childDataJson___children___children'
  | 'childDataJson___children___children___id'
  | 'childDataJson___children___children___children'
  | 'childDataJson___children___internal___content'
  | 'childDataJson___children___internal___contentDigest'
  | 'childDataJson___children___internal___description'
  | 'childDataJson___children___internal___fieldOwners'
  | 'childDataJson___children___internal___ignoreType'
  | 'childDataJson___children___internal___mediaType'
  | 'childDataJson___children___internal___owner'
  | 'childDataJson___children___internal___type'
  | 'childDataJson___children___internal___contentFilePath'
  | 'childDataJson___internal___content'
  | 'childDataJson___internal___contentDigest'
  | 'childDataJson___internal___description'
  | 'childDataJson___internal___fieldOwners'
  | 'childDataJson___internal___ignoreType'
  | 'childDataJson___internal___mediaType'
  | 'childDataJson___internal___owner'
  | 'childDataJson___internal___type'
  | 'childDataJson___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'graphqlTypegen'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___internal___contentFilePath'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___internal___contentFilePath'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DataJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DataJsonGroupConnection>;
};


export type DataJsonConnectionDistinctArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonConnectionMaxArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonConnectionMinArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonConnectionSumArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DataJsonFieldsEnum;
};

export type DataJsonEdge = {
  next?: Maybe<DataJson>;
  node: DataJson;
  previous?: Maybe<DataJson>;
};

export type DataJsonFieldsEnum =
  | 'data___data___data___message'
  | 'data___data___data___full_picture'
  | 'data___data___data___picture'
  | 'data___data___data___actions'
  | 'data___data___data___created_time'
  | 'data___data___data___status_type'
  | 'data___data___data___updated_time'
  | 'data___data___data___icon'
  | 'data___data___data___type'
  | 'data___data___data___link'
  | 'data___data___data___full_res_picture'
  | 'data___data___data___jsonId'
  | 'data___data___data___description'
  | 'data___data___data___id'
  | 'data___data___data___children'
  | 'data___data___featuredImg___sourceInstanceName'
  | 'data___data___featuredImg___absolutePath'
  | 'data___data___featuredImg___relativePath'
  | 'data___data___featuredImg___extension'
  | 'data___data___featuredImg___size'
  | 'data___data___featuredImg___prettySize'
  | 'data___data___featuredImg___modifiedTime'
  | 'data___data___featuredImg___accessTime'
  | 'data___data___featuredImg___changeTime'
  | 'data___data___featuredImg___birthTime'
  | 'data___data___featuredImg___root'
  | 'data___data___featuredImg___dir'
  | 'data___data___featuredImg___base'
  | 'data___data___featuredImg___ext'
  | 'data___data___featuredImg___name'
  | 'data___data___featuredImg___relativeDirectory'
  | 'data___data___featuredImg___dev'
  | 'data___data___featuredImg___mode'
  | 'data___data___featuredImg___nlink'
  | 'data___data___featuredImg___uid'
  | 'data___data___featuredImg___gid'
  | 'data___data___featuredImg___rdev'
  | 'data___data___featuredImg___ino'
  | 'data___data___featuredImg___atimeMs'
  | 'data___data___featuredImg___mtimeMs'
  | 'data___data___featuredImg___ctimeMs'
  | 'data___data___featuredImg___atime'
  | 'data___data___featuredImg___mtime'
  | 'data___data___featuredImg___ctime'
  | 'data___data___featuredImg___birthtime'
  | 'data___data___featuredImg___birthtimeMs'
  | 'data___data___featuredImg___blksize'
  | 'data___data___featuredImg___blocks'
  | 'data___data___featuredImg___url'
  | 'data___data___featuredImg___publicURL'
  | 'data___data___featuredImg___childrenImageSharp'
  | 'data___data___featuredImg___childrenDataJson'
  | 'data___data___featuredImg___id'
  | 'data___data___featuredImg___children'
  | 'data___data___attachments___data'
  | 'data___data___message'
  | 'data___data___full_picture'
  | 'data___data___picture'
  | 'data___data___from___name'
  | 'data___data___from___id'
  | 'data___data___actions'
  | 'data___data___actions___name'
  | 'data___data___actions___link'
  | 'data___data___created_time'
  | 'data___data___status_type'
  | 'data___data___updated_time'
  | 'data___data___icon'
  | 'data___data___type'
  | 'data___data___link'
  | 'data___data___full_res_picture'
  | 'data___data___first_action___name'
  | 'data___data___first_action___link'
  | 'data___data___jsonId'
  | 'data___data___fields___localFile'
  | 'data___data___description'
  | 'data___data___id'
  | 'data___data___parent___id'
  | 'data___data___parent___children'
  | 'data___data___children'
  | 'data___data___children___id'
  | 'data___data___children___children'
  | 'data___data___internal___content'
  | 'data___data___internal___contentDigest'
  | 'data___data___internal___description'
  | 'data___data___internal___fieldOwners'
  | 'data___data___internal___ignoreType'
  | 'data___data___internal___mediaType'
  | 'data___data___internal___owner'
  | 'data___data___internal___type'
  | 'data___data___internal___contentFilePath'
  | 'data___featuredImg___sourceInstanceName'
  | 'data___featuredImg___absolutePath'
  | 'data___featuredImg___relativePath'
  | 'data___featuredImg___extension'
  | 'data___featuredImg___size'
  | 'data___featuredImg___prettySize'
  | 'data___featuredImg___modifiedTime'
  | 'data___featuredImg___accessTime'
  | 'data___featuredImg___changeTime'
  | 'data___featuredImg___birthTime'
  | 'data___featuredImg___root'
  | 'data___featuredImg___dir'
  | 'data___featuredImg___base'
  | 'data___featuredImg___ext'
  | 'data___featuredImg___name'
  | 'data___featuredImg___relativeDirectory'
  | 'data___featuredImg___dev'
  | 'data___featuredImg___mode'
  | 'data___featuredImg___nlink'
  | 'data___featuredImg___uid'
  | 'data___featuredImg___gid'
  | 'data___featuredImg___rdev'
  | 'data___featuredImg___ino'
  | 'data___featuredImg___atimeMs'
  | 'data___featuredImg___mtimeMs'
  | 'data___featuredImg___ctimeMs'
  | 'data___featuredImg___atime'
  | 'data___featuredImg___mtime'
  | 'data___featuredImg___ctime'
  | 'data___featuredImg___birthtime'
  | 'data___featuredImg___birthtimeMs'
  | 'data___featuredImg___blksize'
  | 'data___featuredImg___blocks'
  | 'data___featuredImg___url'
  | 'data___featuredImg___publicURL'
  | 'data___featuredImg___childrenImageSharp'
  | 'data___featuredImg___childrenImageSharp___gatsbyImageData'
  | 'data___featuredImg___childrenImageSharp___id'
  | 'data___featuredImg___childrenImageSharp___children'
  | 'data___featuredImg___childImageSharp___gatsbyImageData'
  | 'data___featuredImg___childImageSharp___id'
  | 'data___featuredImg___childImageSharp___children'
  | 'data___featuredImg___childrenDataJson'
  | 'data___featuredImg___childrenDataJson___message'
  | 'data___featuredImg___childrenDataJson___full_picture'
  | 'data___featuredImg___childrenDataJson___picture'
  | 'data___featuredImg___childrenDataJson___actions'
  | 'data___featuredImg___childrenDataJson___created_time'
  | 'data___featuredImg___childrenDataJson___status_type'
  | 'data___featuredImg___childrenDataJson___updated_time'
  | 'data___featuredImg___childrenDataJson___icon'
  | 'data___featuredImg___childrenDataJson___type'
  | 'data___featuredImg___childrenDataJson___link'
  | 'data___featuredImg___childrenDataJson___full_res_picture'
  | 'data___featuredImg___childrenDataJson___jsonId'
  | 'data___featuredImg___childrenDataJson___description'
  | 'data___featuredImg___childrenDataJson___id'
  | 'data___featuredImg___childrenDataJson___children'
  | 'data___featuredImg___childDataJson___message'
  | 'data___featuredImg___childDataJson___full_picture'
  | 'data___featuredImg___childDataJson___picture'
  | 'data___featuredImg___childDataJson___actions'
  | 'data___featuredImg___childDataJson___created_time'
  | 'data___featuredImg___childDataJson___status_type'
  | 'data___featuredImg___childDataJson___updated_time'
  | 'data___featuredImg___childDataJson___icon'
  | 'data___featuredImg___childDataJson___type'
  | 'data___featuredImg___childDataJson___link'
  | 'data___featuredImg___childDataJson___full_res_picture'
  | 'data___featuredImg___childDataJson___jsonId'
  | 'data___featuredImg___childDataJson___description'
  | 'data___featuredImg___childDataJson___id'
  | 'data___featuredImg___childDataJson___children'
  | 'data___featuredImg___id'
  | 'data___featuredImg___parent___id'
  | 'data___featuredImg___parent___children'
  | 'data___featuredImg___children'
  | 'data___featuredImg___children___id'
  | 'data___featuredImg___children___children'
  | 'data___featuredImg___internal___content'
  | 'data___featuredImg___internal___contentDigest'
  | 'data___featuredImg___internal___description'
  | 'data___featuredImg___internal___fieldOwners'
  | 'data___featuredImg___internal___ignoreType'
  | 'data___featuredImg___internal___mediaType'
  | 'data___featuredImg___internal___owner'
  | 'data___featuredImg___internal___type'
  | 'data___featuredImg___internal___contentFilePath'
  | 'data___attachments___data'
  | 'data___attachments___data___media_type'
  | 'data___attachments___data___unshimmed_url'
  | 'data___attachments___data___description'
  | 'data___attachments___data___title'
  | 'data___message'
  | 'data___full_picture'
  | 'data___picture'
  | 'data___from___name'
  | 'data___from___id'
  | 'data___actions'
  | 'data___actions___name'
  | 'data___actions___link'
  | 'data___created_time'
  | 'data___status_type'
  | 'data___updated_time'
  | 'data___icon'
  | 'data___type'
  | 'data___link'
  | 'data___full_res_picture'
  | 'data___first_action___name'
  | 'data___first_action___link'
  | 'data___jsonId'
  | 'data___fields___localFile'
  | 'data___description'
  | 'data___id'
  | 'data___parent___id'
  | 'data___parent___parent___id'
  | 'data___parent___parent___children'
  | 'data___parent___children'
  | 'data___parent___children___id'
  | 'data___parent___children___children'
  | 'data___parent___internal___content'
  | 'data___parent___internal___contentDigest'
  | 'data___parent___internal___description'
  | 'data___parent___internal___fieldOwners'
  | 'data___parent___internal___ignoreType'
  | 'data___parent___internal___mediaType'
  | 'data___parent___internal___owner'
  | 'data___parent___internal___type'
  | 'data___parent___internal___contentFilePath'
  | 'data___children'
  | 'data___children___id'
  | 'data___children___parent___id'
  | 'data___children___parent___children'
  | 'data___children___children'
  | 'data___children___children___id'
  | 'data___children___children___children'
  | 'data___children___internal___content'
  | 'data___children___internal___contentDigest'
  | 'data___children___internal___description'
  | 'data___children___internal___fieldOwners'
  | 'data___children___internal___ignoreType'
  | 'data___children___internal___mediaType'
  | 'data___children___internal___owner'
  | 'data___children___internal___type'
  | 'data___children___internal___contentFilePath'
  | 'data___internal___content'
  | 'data___internal___contentDigest'
  | 'data___internal___description'
  | 'data___internal___fieldOwners'
  | 'data___internal___ignoreType'
  | 'data___internal___mediaType'
  | 'data___internal___owner'
  | 'data___internal___type'
  | 'data___internal___contentFilePath'
  | 'featuredImg___sourceInstanceName'
  | 'featuredImg___absolutePath'
  | 'featuredImg___relativePath'
  | 'featuredImg___extension'
  | 'featuredImg___size'
  | 'featuredImg___prettySize'
  | 'featuredImg___modifiedTime'
  | 'featuredImg___accessTime'
  | 'featuredImg___changeTime'
  | 'featuredImg___birthTime'
  | 'featuredImg___root'
  | 'featuredImg___dir'
  | 'featuredImg___base'
  | 'featuredImg___ext'
  | 'featuredImg___name'
  | 'featuredImg___relativeDirectory'
  | 'featuredImg___dev'
  | 'featuredImg___mode'
  | 'featuredImg___nlink'
  | 'featuredImg___uid'
  | 'featuredImg___gid'
  | 'featuredImg___rdev'
  | 'featuredImg___ino'
  | 'featuredImg___atimeMs'
  | 'featuredImg___mtimeMs'
  | 'featuredImg___ctimeMs'
  | 'featuredImg___atime'
  | 'featuredImg___mtime'
  | 'featuredImg___ctime'
  | 'featuredImg___birthtime'
  | 'featuredImg___birthtimeMs'
  | 'featuredImg___blksize'
  | 'featuredImg___blocks'
  | 'featuredImg___url'
  | 'featuredImg___publicURL'
  | 'featuredImg___childrenImageSharp'
  | 'featuredImg___childrenImageSharp___fixed___base64'
  | 'featuredImg___childrenImageSharp___fixed___tracedSVG'
  | 'featuredImg___childrenImageSharp___fixed___aspectRatio'
  | 'featuredImg___childrenImageSharp___fixed___width'
  | 'featuredImg___childrenImageSharp___fixed___height'
  | 'featuredImg___childrenImageSharp___fixed___src'
  | 'featuredImg___childrenImageSharp___fixed___srcSet'
  | 'featuredImg___childrenImageSharp___fixed___srcWebp'
  | 'featuredImg___childrenImageSharp___fixed___srcSetWebp'
  | 'featuredImg___childrenImageSharp___fixed___originalName'
  | 'featuredImg___childrenImageSharp___fluid___base64'
  | 'featuredImg___childrenImageSharp___fluid___tracedSVG'
  | 'featuredImg___childrenImageSharp___fluid___aspectRatio'
  | 'featuredImg___childrenImageSharp___fluid___src'
  | 'featuredImg___childrenImageSharp___fluid___srcSet'
  | 'featuredImg___childrenImageSharp___fluid___srcWebp'
  | 'featuredImg___childrenImageSharp___fluid___srcSetWebp'
  | 'featuredImg___childrenImageSharp___fluid___sizes'
  | 'featuredImg___childrenImageSharp___fluid___originalImg'
  | 'featuredImg___childrenImageSharp___fluid___originalName'
  | 'featuredImg___childrenImageSharp___fluid___presentationWidth'
  | 'featuredImg___childrenImageSharp___fluid___presentationHeight'
  | 'featuredImg___childrenImageSharp___gatsbyImageData'
  | 'featuredImg___childrenImageSharp___original___width'
  | 'featuredImg___childrenImageSharp___original___height'
  | 'featuredImg___childrenImageSharp___original___src'
  | 'featuredImg___childrenImageSharp___resize___src'
  | 'featuredImg___childrenImageSharp___resize___tracedSVG'
  | 'featuredImg___childrenImageSharp___resize___width'
  | 'featuredImg___childrenImageSharp___resize___height'
  | 'featuredImg___childrenImageSharp___resize___aspectRatio'
  | 'featuredImg___childrenImageSharp___resize___originalName'
  | 'featuredImg___childrenImageSharp___id'
  | 'featuredImg___childrenImageSharp___parent___id'
  | 'featuredImg___childrenImageSharp___parent___children'
  | 'featuredImg___childrenImageSharp___children'
  | 'featuredImg___childrenImageSharp___children___id'
  | 'featuredImg___childrenImageSharp___children___children'
  | 'featuredImg___childrenImageSharp___internal___content'
  | 'featuredImg___childrenImageSharp___internal___contentDigest'
  | 'featuredImg___childrenImageSharp___internal___description'
  | 'featuredImg___childrenImageSharp___internal___fieldOwners'
  | 'featuredImg___childrenImageSharp___internal___ignoreType'
  | 'featuredImg___childrenImageSharp___internal___mediaType'
  | 'featuredImg___childrenImageSharp___internal___owner'
  | 'featuredImg___childrenImageSharp___internal___type'
  | 'featuredImg___childrenImageSharp___internal___contentFilePath'
  | 'featuredImg___childImageSharp___fixed___base64'
  | 'featuredImg___childImageSharp___fixed___tracedSVG'
  | 'featuredImg___childImageSharp___fixed___aspectRatio'
  | 'featuredImg___childImageSharp___fixed___width'
  | 'featuredImg___childImageSharp___fixed___height'
  | 'featuredImg___childImageSharp___fixed___src'
  | 'featuredImg___childImageSharp___fixed___srcSet'
  | 'featuredImg___childImageSharp___fixed___srcWebp'
  | 'featuredImg___childImageSharp___fixed___srcSetWebp'
  | 'featuredImg___childImageSharp___fixed___originalName'
  | 'featuredImg___childImageSharp___fluid___base64'
  | 'featuredImg___childImageSharp___fluid___tracedSVG'
  | 'featuredImg___childImageSharp___fluid___aspectRatio'
  | 'featuredImg___childImageSharp___fluid___src'
  | 'featuredImg___childImageSharp___fluid___srcSet'
  | 'featuredImg___childImageSharp___fluid___srcWebp'
  | 'featuredImg___childImageSharp___fluid___srcSetWebp'
  | 'featuredImg___childImageSharp___fluid___sizes'
  | 'featuredImg___childImageSharp___fluid___originalImg'
  | 'featuredImg___childImageSharp___fluid___originalName'
  | 'featuredImg___childImageSharp___fluid___presentationWidth'
  | 'featuredImg___childImageSharp___fluid___presentationHeight'
  | 'featuredImg___childImageSharp___gatsbyImageData'
  | 'featuredImg___childImageSharp___original___width'
  | 'featuredImg___childImageSharp___original___height'
  | 'featuredImg___childImageSharp___original___src'
  | 'featuredImg___childImageSharp___resize___src'
  | 'featuredImg___childImageSharp___resize___tracedSVG'
  | 'featuredImg___childImageSharp___resize___width'
  | 'featuredImg___childImageSharp___resize___height'
  | 'featuredImg___childImageSharp___resize___aspectRatio'
  | 'featuredImg___childImageSharp___resize___originalName'
  | 'featuredImg___childImageSharp___id'
  | 'featuredImg___childImageSharp___parent___id'
  | 'featuredImg___childImageSharp___parent___children'
  | 'featuredImg___childImageSharp___children'
  | 'featuredImg___childImageSharp___children___id'
  | 'featuredImg___childImageSharp___children___children'
  | 'featuredImg___childImageSharp___internal___content'
  | 'featuredImg___childImageSharp___internal___contentDigest'
  | 'featuredImg___childImageSharp___internal___description'
  | 'featuredImg___childImageSharp___internal___fieldOwners'
  | 'featuredImg___childImageSharp___internal___ignoreType'
  | 'featuredImg___childImageSharp___internal___mediaType'
  | 'featuredImg___childImageSharp___internal___owner'
  | 'featuredImg___childImageSharp___internal___type'
  | 'featuredImg___childImageSharp___internal___contentFilePath'
  | 'featuredImg___childrenDataJson'
  | 'featuredImg___childrenDataJson___data___message'
  | 'featuredImg___childrenDataJson___data___full_picture'
  | 'featuredImg___childrenDataJson___data___picture'
  | 'featuredImg___childrenDataJson___data___actions'
  | 'featuredImg___childrenDataJson___data___created_time'
  | 'featuredImg___childrenDataJson___data___status_type'
  | 'featuredImg___childrenDataJson___data___updated_time'
  | 'featuredImg___childrenDataJson___data___icon'
  | 'featuredImg___childrenDataJson___data___type'
  | 'featuredImg___childrenDataJson___data___link'
  | 'featuredImg___childrenDataJson___data___full_res_picture'
  | 'featuredImg___childrenDataJson___data___jsonId'
  | 'featuredImg___childrenDataJson___data___description'
  | 'featuredImg___childrenDataJson___data___id'
  | 'featuredImg___childrenDataJson___data___children'
  | 'featuredImg___childrenDataJson___featuredImg___sourceInstanceName'
  | 'featuredImg___childrenDataJson___featuredImg___absolutePath'
  | 'featuredImg___childrenDataJson___featuredImg___relativePath'
  | 'featuredImg___childrenDataJson___featuredImg___extension'
  | 'featuredImg___childrenDataJson___featuredImg___size'
  | 'featuredImg___childrenDataJson___featuredImg___prettySize'
  | 'featuredImg___childrenDataJson___featuredImg___modifiedTime'
  | 'featuredImg___childrenDataJson___featuredImg___accessTime'
  | 'featuredImg___childrenDataJson___featuredImg___changeTime'
  | 'featuredImg___childrenDataJson___featuredImg___birthTime'
  | 'featuredImg___childrenDataJson___featuredImg___root'
  | 'featuredImg___childrenDataJson___featuredImg___dir'
  | 'featuredImg___childrenDataJson___featuredImg___base'
  | 'featuredImg___childrenDataJson___featuredImg___ext'
  | 'featuredImg___childrenDataJson___featuredImg___name'
  | 'featuredImg___childrenDataJson___featuredImg___relativeDirectory'
  | 'featuredImg___childrenDataJson___featuredImg___dev'
  | 'featuredImg___childrenDataJson___featuredImg___mode'
  | 'featuredImg___childrenDataJson___featuredImg___nlink'
  | 'featuredImg___childrenDataJson___featuredImg___uid'
  | 'featuredImg___childrenDataJson___featuredImg___gid'
  | 'featuredImg___childrenDataJson___featuredImg___rdev'
  | 'featuredImg___childrenDataJson___featuredImg___ino'
  | 'featuredImg___childrenDataJson___featuredImg___atimeMs'
  | 'featuredImg___childrenDataJson___featuredImg___mtimeMs'
  | 'featuredImg___childrenDataJson___featuredImg___ctimeMs'
  | 'featuredImg___childrenDataJson___featuredImg___atime'
  | 'featuredImg___childrenDataJson___featuredImg___mtime'
  | 'featuredImg___childrenDataJson___featuredImg___ctime'
  | 'featuredImg___childrenDataJson___featuredImg___birthtime'
  | 'featuredImg___childrenDataJson___featuredImg___birthtimeMs'
  | 'featuredImg___childrenDataJson___featuredImg___blksize'
  | 'featuredImg___childrenDataJson___featuredImg___blocks'
  | 'featuredImg___childrenDataJson___featuredImg___url'
  | 'featuredImg___childrenDataJson___featuredImg___publicURL'
  | 'featuredImg___childrenDataJson___featuredImg___childrenImageSharp'
  | 'featuredImg___childrenDataJson___featuredImg___childrenDataJson'
  | 'featuredImg___childrenDataJson___featuredImg___id'
  | 'featuredImg___childrenDataJson___featuredImg___children'
  | 'featuredImg___childrenDataJson___attachments___data'
  | 'featuredImg___childrenDataJson___message'
  | 'featuredImg___childrenDataJson___full_picture'
  | 'featuredImg___childrenDataJson___picture'
  | 'featuredImg___childrenDataJson___from___name'
  | 'featuredImg___childrenDataJson___from___id'
  | 'featuredImg___childrenDataJson___actions'
  | 'featuredImg___childrenDataJson___actions___name'
  | 'featuredImg___childrenDataJson___actions___link'
  | 'featuredImg___childrenDataJson___created_time'
  | 'featuredImg___childrenDataJson___status_type'
  | 'featuredImg___childrenDataJson___updated_time'
  | 'featuredImg___childrenDataJson___icon'
  | 'featuredImg___childrenDataJson___type'
  | 'featuredImg___childrenDataJson___link'
  | 'featuredImg___childrenDataJson___full_res_picture'
  | 'featuredImg___childrenDataJson___first_action___name'
  | 'featuredImg___childrenDataJson___first_action___link'
  | 'featuredImg___childrenDataJson___jsonId'
  | 'featuredImg___childrenDataJson___fields___localFile'
  | 'featuredImg___childrenDataJson___description'
  | 'featuredImg___childrenDataJson___id'
  | 'featuredImg___childrenDataJson___parent___id'
  | 'featuredImg___childrenDataJson___parent___children'
  | 'featuredImg___childrenDataJson___children'
  | 'featuredImg___childrenDataJson___children___id'
  | 'featuredImg___childrenDataJson___children___children'
  | 'featuredImg___childrenDataJson___internal___content'
  | 'featuredImg___childrenDataJson___internal___contentDigest'
  | 'featuredImg___childrenDataJson___internal___description'
  | 'featuredImg___childrenDataJson___internal___fieldOwners'
  | 'featuredImg___childrenDataJson___internal___ignoreType'
  | 'featuredImg___childrenDataJson___internal___mediaType'
  | 'featuredImg___childrenDataJson___internal___owner'
  | 'featuredImg___childrenDataJson___internal___type'
  | 'featuredImg___childrenDataJson___internal___contentFilePath'
  | 'featuredImg___childDataJson___data___message'
  | 'featuredImg___childDataJson___data___full_picture'
  | 'featuredImg___childDataJson___data___picture'
  | 'featuredImg___childDataJson___data___actions'
  | 'featuredImg___childDataJson___data___created_time'
  | 'featuredImg___childDataJson___data___status_type'
  | 'featuredImg___childDataJson___data___updated_time'
  | 'featuredImg___childDataJson___data___icon'
  | 'featuredImg___childDataJson___data___type'
  | 'featuredImg___childDataJson___data___link'
  | 'featuredImg___childDataJson___data___full_res_picture'
  | 'featuredImg___childDataJson___data___jsonId'
  | 'featuredImg___childDataJson___data___description'
  | 'featuredImg___childDataJson___data___id'
  | 'featuredImg___childDataJson___data___children'
  | 'featuredImg___childDataJson___featuredImg___sourceInstanceName'
  | 'featuredImg___childDataJson___featuredImg___absolutePath'
  | 'featuredImg___childDataJson___featuredImg___relativePath'
  | 'featuredImg___childDataJson___featuredImg___extension'
  | 'featuredImg___childDataJson___featuredImg___size'
  | 'featuredImg___childDataJson___featuredImg___prettySize'
  | 'featuredImg___childDataJson___featuredImg___modifiedTime'
  | 'featuredImg___childDataJson___featuredImg___accessTime'
  | 'featuredImg___childDataJson___featuredImg___changeTime'
  | 'featuredImg___childDataJson___featuredImg___birthTime'
  | 'featuredImg___childDataJson___featuredImg___root'
  | 'featuredImg___childDataJson___featuredImg___dir'
  | 'featuredImg___childDataJson___featuredImg___base'
  | 'featuredImg___childDataJson___featuredImg___ext'
  | 'featuredImg___childDataJson___featuredImg___name'
  | 'featuredImg___childDataJson___featuredImg___relativeDirectory'
  | 'featuredImg___childDataJson___featuredImg___dev'
  | 'featuredImg___childDataJson___featuredImg___mode'
  | 'featuredImg___childDataJson___featuredImg___nlink'
  | 'featuredImg___childDataJson___featuredImg___uid'
  | 'featuredImg___childDataJson___featuredImg___gid'
  | 'featuredImg___childDataJson___featuredImg___rdev'
  | 'featuredImg___childDataJson___featuredImg___ino'
  | 'featuredImg___childDataJson___featuredImg___atimeMs'
  | 'featuredImg___childDataJson___featuredImg___mtimeMs'
  | 'featuredImg___childDataJson___featuredImg___ctimeMs'
  | 'featuredImg___childDataJson___featuredImg___atime'
  | 'featuredImg___childDataJson___featuredImg___mtime'
  | 'featuredImg___childDataJson___featuredImg___ctime'
  | 'featuredImg___childDataJson___featuredImg___birthtime'
  | 'featuredImg___childDataJson___featuredImg___birthtimeMs'
  | 'featuredImg___childDataJson___featuredImg___blksize'
  | 'featuredImg___childDataJson___featuredImg___blocks'
  | 'featuredImg___childDataJson___featuredImg___url'
  | 'featuredImg___childDataJson___featuredImg___publicURL'
  | 'featuredImg___childDataJson___featuredImg___childrenImageSharp'
  | 'featuredImg___childDataJson___featuredImg___childrenDataJson'
  | 'featuredImg___childDataJson___featuredImg___id'
  | 'featuredImg___childDataJson___featuredImg___children'
  | 'featuredImg___childDataJson___attachments___data'
  | 'featuredImg___childDataJson___message'
  | 'featuredImg___childDataJson___full_picture'
  | 'featuredImg___childDataJson___picture'
  | 'featuredImg___childDataJson___from___name'
  | 'featuredImg___childDataJson___from___id'
  | 'featuredImg___childDataJson___actions'
  | 'featuredImg___childDataJson___actions___name'
  | 'featuredImg___childDataJson___actions___link'
  | 'featuredImg___childDataJson___created_time'
  | 'featuredImg___childDataJson___status_type'
  | 'featuredImg___childDataJson___updated_time'
  | 'featuredImg___childDataJson___icon'
  | 'featuredImg___childDataJson___type'
  | 'featuredImg___childDataJson___link'
  | 'featuredImg___childDataJson___full_res_picture'
  | 'featuredImg___childDataJson___first_action___name'
  | 'featuredImg___childDataJson___first_action___link'
  | 'featuredImg___childDataJson___jsonId'
  | 'featuredImg___childDataJson___fields___localFile'
  | 'featuredImg___childDataJson___description'
  | 'featuredImg___childDataJson___id'
  | 'featuredImg___childDataJson___parent___id'
  | 'featuredImg___childDataJson___parent___children'
  | 'featuredImg___childDataJson___children'
  | 'featuredImg___childDataJson___children___id'
  | 'featuredImg___childDataJson___children___children'
  | 'featuredImg___childDataJson___internal___content'
  | 'featuredImg___childDataJson___internal___contentDigest'
  | 'featuredImg___childDataJson___internal___description'
  | 'featuredImg___childDataJson___internal___fieldOwners'
  | 'featuredImg___childDataJson___internal___ignoreType'
  | 'featuredImg___childDataJson___internal___mediaType'
  | 'featuredImg___childDataJson___internal___owner'
  | 'featuredImg___childDataJson___internal___type'
  | 'featuredImg___childDataJson___internal___contentFilePath'
  | 'featuredImg___id'
  | 'featuredImg___parent___id'
  | 'featuredImg___parent___parent___id'
  | 'featuredImg___parent___parent___children'
  | 'featuredImg___parent___children'
  | 'featuredImg___parent___children___id'
  | 'featuredImg___parent___children___children'
  | 'featuredImg___parent___internal___content'
  | 'featuredImg___parent___internal___contentDigest'
  | 'featuredImg___parent___internal___description'
  | 'featuredImg___parent___internal___fieldOwners'
  | 'featuredImg___parent___internal___ignoreType'
  | 'featuredImg___parent___internal___mediaType'
  | 'featuredImg___parent___internal___owner'
  | 'featuredImg___parent___internal___type'
  | 'featuredImg___parent___internal___contentFilePath'
  | 'featuredImg___children'
  | 'featuredImg___children___id'
  | 'featuredImg___children___parent___id'
  | 'featuredImg___children___parent___children'
  | 'featuredImg___children___children'
  | 'featuredImg___children___children___id'
  | 'featuredImg___children___children___children'
  | 'featuredImg___children___internal___content'
  | 'featuredImg___children___internal___contentDigest'
  | 'featuredImg___children___internal___description'
  | 'featuredImg___children___internal___fieldOwners'
  | 'featuredImg___children___internal___ignoreType'
  | 'featuredImg___children___internal___mediaType'
  | 'featuredImg___children___internal___owner'
  | 'featuredImg___children___internal___type'
  | 'featuredImg___children___internal___contentFilePath'
  | 'featuredImg___internal___content'
  | 'featuredImg___internal___contentDigest'
  | 'featuredImg___internal___description'
  | 'featuredImg___internal___fieldOwners'
  | 'featuredImg___internal___ignoreType'
  | 'featuredImg___internal___mediaType'
  | 'featuredImg___internal___owner'
  | 'featuredImg___internal___type'
  | 'featuredImg___internal___contentFilePath'
  | 'attachments___data'
  | 'attachments___data___media___source'
  | 'attachments___data___media_type'
  | 'attachments___data___target___id'
  | 'attachments___data___target___url'
  | 'attachments___data___unshimmed_url'
  | 'attachments___data___description'
  | 'attachments___data___title'
  | 'message'
  | 'full_picture'
  | 'picture'
  | 'from___name'
  | 'from___id'
  | 'actions'
  | 'actions___name'
  | 'actions___link'
  | 'created_time'
  | 'status_type'
  | 'updated_time'
  | 'icon'
  | 'type'
  | 'link'
  | 'full_res_picture'
  | 'first_action___name'
  | 'first_action___link'
  | 'jsonId'
  | 'fields___localFile'
  | 'description'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DataJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DataJsonGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DataJsonGroupConnectionDistinctArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonGroupConnectionMaxArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonGroupConnectionMinArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonGroupConnectionSumArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DataJsonFieldsEnum;
};

export type DataJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DataJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteTitleQueryQuery = { site?: { siteMetadata?: { title?: string | null } | null } | null };

export type NewsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsQuery = { allDataJson: { edges: Array<{ node: { id: string, message?: string | null, created_time?: any | null, first_action?: { link?: string | null } | null, featuredImg?: { childrenImageSharp?: Array<{ gatsbyImageData: any } | null> | null } | null } }> } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
