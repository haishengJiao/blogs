module.exports = {
  '/html/': ['html'],
  '/test/': [
    'test01',
    'test02',
    {
      text: 'Guide',
      children: ['/test/test03.md', '/test/test04.md', '/test/test05.md']
    },
    'test04'
  ],
  '/css/': ['css01', 'css02', 'css03', 'css04'],
  '/js/': ['js01'],
  '/vue/': ['vue01', 'vue02', 'vue03', 'vue04', 'vue05']
}
