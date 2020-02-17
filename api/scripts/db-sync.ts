import bcrypt from 'bcryptjs'
import csvtojson from 'csvtojson'     //  개인정보 덤프파일
import lodash from 'lodash'
// import { LoremIpsum } from 'lorem-ipsum'

import { sequelize } from 'db'
import { create } from 'domain'
import post from 'handlers/post'
import * as models from 'models'

// const lorem = new LoremIpsum ({
//   sentencesPerParagraph: {
//     max: 12,
//     min: 4
//   },
//   wordsPerSentence: {
//     max:16,
//     min: 2
//   }
// })

// const userCount = 2

// async function boardGenerator (boardName: string, postCount: number) {
//   const board = await models.Board.create({ boardName })
//   const boardId = board.get('id')
  
//   for (let i = 0; i < postCount; i++) {
//     const commentCount = lodash.random(0, 20)
    
//     const post = await models.Post.create({
//       subject: lorem.generateParagraphs(1),
//       content: lorem.generateParagraphs(lodash.random(1, 10)),
//       commentCount,
//       boardId,
//       userId: lodash.random(1, userCount)
//     })
//     const postId = post.get('id')
    
//     for (let j = 0; j < commentCount; j++) {
//       await models.Comment.create({
//         content: lorem.generateParagraphs(lodash.random(1, 3)),
//         postId,
//         userId: lodash.random(1, userCount)
//       })
//     }
//   }
// }

// async function groupGeneratoe (groupName: string, postCount: number) {
//   const group = await models.Group.create({ groupName })
//   const groupId = group.get('id')

// }

// async function main () {
//   if (!models) {
//     return
//   }

//   await sequelize.sync({ force: true })

//   await models.User.bulkCreate([
//     {
//       name: '관리자',
//       email: 'admin@gmail.com',
//       password: bcrypt.hashSync('admin', 10),
//       isAdmin: true
//     },
//     {
//       name: '일반회원1',
//       email: 'member@gmail.com',
//       password: bcrypt.hashSync('member', 10)
//     }
//   ])

//   await boardGenerator
// }

async function main () {
  if (!models) {
    return
  }

  await sequelize.sync({ force: true })
  await sequelize.sync()

  // 나머지 파일들은 용량이 많지 않으니 그냥 json을 바로 읽어서 사용
  const users = require('../data/users.json')
  for (let userIndex = 0; userIndex < users.length; userIndex++) {
    const user = users[userIndex]

    await models.User.create({
      id: user.id,
      loginId: user.login_id,
      password: user.encrypted_password,
      name: user.name,
      nickname: user.nickname,
      alias: user.alias,
      email: user.email,
      level: user.level,
      gender: user.gender,
      birthday: user.birthday,
      homepage: user.homepage,
      tel: user.tel,
      mobile: user.mobile
    })
  }

  // await models.Group.truncate({ cascade: true })
  // await models.Comment.truncate({ cascade: true })
  // await models.Post.truncate({ cascade: true })
  // await models.Board.truncate({ cascade: true })

  const groups = require('../data/nm_groups.json')
  for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
    const group = groups[groupIndex]

    await models.Group.create({
      id: group.id,
      name: group.groupName,
      order: group.order,
      postCount: group.postCount
    })
  }

  const boards = require('../data/nm_boards.json')
  for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
    const board = boards[boardIndex]

    await models.Board.create({
      id: board.boardId,
      name: board.boardName,
      notice: board.notice,
      order: board.order,
      groupId: board.groupId,
      postCount: board.postCount,
      addedAt: board.addedAt,
      gender: board.limitGender
    })
  }

  // posts의 경우 파일 수가 워낙 많아서 10만개씩 처리
  for (let postsPartIndex = 0; postsPartIndex < 1; postsPartIndex++) {
    const csvToJson = csvtojson()

    const postsPart = await csvToJson.fromFile(
      `data/nm_posts-${postsPartIndex}.csv`
      // `../data/nm_posts-${postsPartIndex}.csv`
    )

    // csvToJson = null // 메모리 절약을 위해 바로 제거

    // const postsPart = require(`../data/nm_posts-${postsPartIndex}.csv`)

    // posts.push(...postsPart) // 이렇게 합쳐놓고 처리하면 좋겠지만, 메모리를 넘쳐버린다
    for (let postIndex = 0; postIndex < postsPart.length; postIndex++) {
      const post = postsPart[postIndex]

      // console.log(post.subject)

      // if (post.isComment === false) {
      await models.Post.create({
        id: post.id,
        isComment: post.isComment,
        userId: post.userId,
        parentId: post.parentId,
        subject: post.subject,
        content: post.content,
        contentAsHtml: post.contentAsHtml,
        contentAsText: post.contentAsText,
        readCount: post.readCount,
        commentCount: post.commentCount,
        likeCount: post.likeCount,
        dislikeCount: post.dislikeCount,
        pale: post.pale,
        boardId: post.boardId,
        groupId: post.groupId
      })
    }
  }

  await sequelize.close()
}

(async () => {
  await main()
})().catch(e => {
  console.log(e)
})
