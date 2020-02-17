import { getGroup } from 'pages/page/groupIndex'

const layout = {
  titleContainer: {
    title: '친목',
    subTitle: '',
    spacing: 3
  }
}

export default getGroup(layout).GroupIndex
export const Edit = getGroup(layout).Edit
export const New = getGroup(layout).New
export const Read = getGroup(layout).Read
