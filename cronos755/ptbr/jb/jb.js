pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret == 179 || main_ret == 0){
	document.getElementById("progress").innerHTML="Jailbreak Realizado com <font color=\"#00FF12\">SUCESSO!!</font>, Se estiver usando o modo Manual, Agora Execute o <font color=\"#F3D400\">HEN</font> ou <font color=\"#001EFF\">MIRA</font>!!!";
} else{
	alert("O Jailbreak FALHOU!!! Reinicie seu PS4 e tente novamente!!");
	document.getElementById("progress").innerHTML="O Jailbreak <font color=\"#F00\">FALHOU!!!</font>, Reinicie seu PS4 e tente novamente!!";
}