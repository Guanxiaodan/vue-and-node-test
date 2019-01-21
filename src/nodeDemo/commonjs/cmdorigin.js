define(function () {
  var showSchool = function (school) {
    console.log('我在' + school + '上学')
  }
  var showClass = function (classes) {
    console.log('我学' + classes + '专业')
  }
  return {
    showClass: showClass,
    showSchool: showSchool
  }
})

