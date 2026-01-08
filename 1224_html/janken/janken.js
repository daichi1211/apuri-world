var c=0
var cc=0
var ccc=0
$(".aa").on("click",function(){
$(".b").html("グー")
var num=Math.floor(Math.random()*3+1)
cc=cc+1
$(".d").html(cc)
console.log(num)
if(num===1){console.log("1が出ました")
  $(".a").html("グー")
  $(".bb").html("あいこ")
  c=0
  $(".bbbb").html(c)}
 else if(num===2){console.log("2が出ました")
  $(".a").html("チョキ")
  $(".bb").html("勝ち")
  c=c+1
  $(".bbbb").html(c)
  ccc=ccc+1
  $(".cccc").html(ccc)}
 else if(num===3){console.log("3が出ました")
  $(".a").html("パー")
  $(".bb").html("負け")
  c=0
  $(".bbbb").html(c)
}
$(".bbb").html(ccc/cc)
})

$(".aaa").on("click",function(){
$(".b").html("チョキ")
var num=Math.floor(Math.random()*3+1)
console.log(num)
cc=cc+1
$(".d").html(cc)
if(num===1){console.log("1が出ました")
  $(".a").html("グー")
  $(".bb").html("負け")
  c=0
  $(".bbbb").html(c)}
 else if(num===2){console.log("2が出ました")
  $(".a").html("チョキ")
  $(".bb").html("あいこ")
  c=0
  $(".bbbb").html(c)}
 else if(num===3){console.log("3が出ました")
  $(".a").html("パー")
  $(".bb").html("勝ち")
  c=c+1
  $(".bbbb").html(c)
  ccc=ccc+1
  $(".cccc").html(ccc)
}
$(".bbb").html(ccc/cc)
})

$(".aaaa").on("click",function(){
$(".b").html("パー")
var num=Math.floor(Math.random()*3+1)
console.log(num)
cc=cc+1
$(".d").html(cc)
if(num===1){console.log("1が出ました")
  $(".a").html("グー")
  $(".bb").html("勝ち")
  c=c+1
  $(".bbbb").html(c)
  ccc=ccc+1
  $(".cccc").html(ccc)}
 else if(num===2){console.log("2が出ました")
  $(".a").html("チョキ")
  $(".bb").html("負け")
  c=0
  $(".bbbb").html(c)}
 else if(num===3){console.log("3が出ました")
  $(".a").html("パー")
  $(".bb").html("あいこ")
  c
  $(".bbbb").html(c)}
$(".bbb").html(ccc/cc)
})
