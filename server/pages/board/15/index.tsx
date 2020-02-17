import { getBoard } from 'pages/page/boardIndex'

const layout = {
  titleContainer: {
    title: '진로 기초기타',
    subTitle: '',
    spacing: 3
  }
}

export default getBoard(layout).BoardIndex
export const Edit = getBoard(layout).Edit
export const New = getBoard(layout).New
export const Read = getBoard(layout).Read
