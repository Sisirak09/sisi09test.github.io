pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret == 179 || main_ret == 0){
	document.getElementById("progress").innerHTML="Jailbreak Performed with <font color=\"#00FF12\">SUCCESS!!</font>, If using Manual mode, Now run <font color=\"#F3D400\">HEN</font> or <font color=\"#001EFF\">MIRA</font>!!!";
} else{
	alert("The Jailbreak FAILED !!! Restart your PS4 and try again!!");
	document.getElementById("progress").innerHTML="The Jailbreak <font color=\"#F00\">FALED!!!</font> Restart your PS4 and try again!!";
}