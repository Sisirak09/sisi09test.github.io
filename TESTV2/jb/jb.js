pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret == 179 || main_ret == 0){
	localStorage.passcount = ++localStorage.passcount;window.passCounter.innerHTML=localStorage.passcount;
	document.getElementById("progress").innerHTML="PS4 Jailbreak 7.5X Jailbreak Complete !!";
} else{
	localStorage.failcount = ++localStorage.failcount;window.failCounter.innerHTML=localStorage.failcount;
	alert("Jailbreak Failed!! Please Restart and Start Fresh!!!");
	document.getElementById("progress").innerHTML="PS4 Jailbreak 7.5X Jailbreak Failed, Restart and Start Fresh !!";
}