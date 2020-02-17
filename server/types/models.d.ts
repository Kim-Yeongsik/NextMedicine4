namespace Model {
  interface User {
    id?: number
    loginId?: string
    name?: string
    nickname?: string
    alias?: string
    email?: string
    level?: number
    gender?: boolean
    birthday?: Date
    homepage?: string
    tel?: string
    mobile?: string
    password?: string
    isAdmin?: boolean
    createdAt?: Date
    updatedAt?: Date
  }

  interface Group {
    id?: number
    name?: string
    order?: number
    addedAt?: Date
    postCount?: number
  }

  interface Notice {
    id?: number
    startAt?: Date
    endAT?: Date
    boardId?: number
    postCount?: number

    board?: Board
  }

  interface Board {
    id?: number
    name?: string
    notice?: string
    order?: int
    gender?: string
    postCount?: number
    addedAt?: Date

    groupId?: number
    postId?: number

    group?: Group
    post?: Post
  }

  interface Post {
    id?: number
    parentId?: number
    subject?: string
    content?: string
    contentAsHtml?: string
    contentAsText?: string
    writer?: string
    isNotice?: boolean
    isComment?: number
    readCount?: number
    commentCount?: number
    likeCount?: number
    dislikeCount?: number

    pale?: string
    createdAt?: Date
    updatedAt?: Date
    addOn?: any
    files?: Array<File>
    images?: Array<File>

    postId?: number
    boardId?: number
    groupId?: number
    userId?: number

    post?: post
    board?: Board
    group?: Group
    comments?: Post[]
    user?: User
  }

  interface File {
    fieldname?: string
    originalname?: string
    encoding?: string
    mimetype?: string
    destination?: string
    filename?: string
    path?: string
    size?: number
  }

  interface Comment {
    id?: number
    parentId?: number
    subject?: string
    content?: string
    contentAsHtml?: string
    contentAsText?: string
    writer?: string
    isNotice?: boolean
    isComment?: number
    readCount?: number
    commentCount?: number
    likeCount?: number
    dislikeCount?: number
    pale?: string
    createdAt?: Date
    updatedAt?: Date
    addOn?: any
    files?: Array<File>
    images?: Array<File>

    gruopId?: number
    boardId?: number
    postId?: number
    userId?: number

    group?: Group
    board?: Post
    post?: Post
    user?: User
  }
}
