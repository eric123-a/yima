import styles from './index.less';
import { Select, Button, Table,Pagination } from 'antd';
import State from './state';

const { Option } = Select;
const columns = [
  {
    title: '迭代名称',
    dataIndex: 'name',
  }, {
    title: '状态',
    dataIndex: 'state',
    render: state => {
      let text=''
      let color=''
      switch (state) {
        case 'inprog': {
          text='进行中';
          color='#1890FF';
          break
        }
        case 'new': {
          text='新提出';
          color='#72C040';
          break
        }
        case 'finish': {
          text='已完成';
          color='#929292';
          break
        }

      } return (
         <text style={{color:color}}>{text}</text>
      )
    },
    filters: [
      {
        text: '进行中',
        value: 'inprog',
      },
      {
        text: '新提出',
        value: 'new',
      },
      {
        text: '已完成',
        value: 'finish',
      },
    ]
  }, {
    title: '负责人',
    dataIndex: 'person',
  }, {
    title: '开始时间',
    dataIndex: 'starttime',

  }, {
    title: '结束时间',
    dataIndex: 'endtime',

  }, {
    title: '绑定仓库',
    dataIndex: 'warehouse',
  }, {
    title: '操作',
    dataIndex: 'options',
  }
]
const data = [
  {
    key: '1',
    name: '迭代名称',
    state: 'inprog',
    person: '负责人',
    starttime:'2022.3.15',
    endtime:'2022.3.15',
    
  },
]
export default function IndexPage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.midPage}>
        <div className={styles.title}>
          <Select defaultValue="项目1" style={{ width: 120, color: '#1890FF' }} bordered={false}>
            <Option value="项目1">项目1</Option>
            <Option value="项目2">项目2</Option>
          </Select>
          <Button type="primary">新建迭代</Button>
        </div>
        <div className={styles.list}>
          <Table columns={columns} dataSource={data} pagination={false}/>

          <Pagination showQuickJumper defaultCurrent={2} total={500}  />
        </div>
      </div>
    </div>
  );
}
