define(function () {
  var alertName = function (str) {
    alert('我是' + str)
  }
  var alertAge = function (num) {
    alert('我' + num + '岁了')
  }
  return {
    alertName: alertName,
    alertAge: alertAge
  }
})
