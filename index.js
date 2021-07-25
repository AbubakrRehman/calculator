btns=document.getElementsByTagName("button");
txtbox=document.getElementById("ans");
answer=""

console.log(txtbox);
for (btn of btns){
    btn.onclick=function(){
        console.log(this.innerHTML);
        btn_value=this.innerHTML;
        

        if(btn_value=='C'){
            answer="";
            txtbox.value=answer;
        }else if(btn_value=='='){
            answer=eval(answer);
            txtbox.value=answer;
        }else if (btn_value=='x'){
            answer+="*";
            txtbox.value=answer;
        }
        else{
            answer+=btn_value;
            txtbox.value=answer;
        }

     

}
}
