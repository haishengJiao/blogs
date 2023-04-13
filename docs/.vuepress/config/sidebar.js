module.exports = {
  '/html/': [
    'html'
    // 'html',
    // '弹性布局',
    // {
    //   title: '哈哈哈',
    //   path: '弹性布局',
    //   children: [
    //     { title: '123', path: 'html' }
    //   ]
    // }
  ],
  '/test/': [
    'test01',
    'test02',
    {
      text: 'Guide',
      children: ['/test/test03.md', '/test/test04.md', '/test/test05.md'],
    },
    'test04',
  ],
}