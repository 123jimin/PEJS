function strPlus(a,b){
  if(b=='0') return a; if(a=='0') return b;
  if(b.length>a.length) return strPlus(b,a);
  if(a.length<10) return ''+(~~a+~~b);
  while(b.length<a.length) b='0'+b;
  for(var s='',i=a.length-1,c=0,r;i>=0;i--){
    if((r=~~a[i]+~~b[i]+c)>=10) c=1; else c=0;
    s=(r%10)+s;
  }
  return c?'1'+s:s;
}
function prodDigit(a,d){
  if(d==0) return '0'; if(d==1) return a;
  for(var s='',i=a.length-1,c=0;i>=0;i--){
    var r=a[i]*d+c; c=~~(r/10); r%=10;
    s=r+s;
  }
  return c?c+s:s;
}
function strProd(a,b){
  a=''+a;b=''+b;
  if(a.length<b.length) return strProd(b,a);
  if(b.length==1) return prodDigit(a,~~b);
  if(a.length+b.length<10) return ''+a*b;
  else return strPlus(strProd(a,b.slice(0,b.length-1))+'0',prodDigit(a,~~b[b.length-1]));
}
for(var i=101010,s,s1,s2,t;i<10000000;i++){
  s=''+i;
  while(s.length<7)s='0'+s;
  t=(('1'+s+'3')*('1'+s+'3'))+'';if(t[0]=='1'&&t[2]=='2'&&t[4]=='3'&&t[6]=='4'&&t[8]=='5'&&t[10]=='6'&&t[12]=='7'){
    t=strProd('1'+s+'3','1'+s+'3');
    if(t[14]=='8'&&t[16]=='9'){console.log('1'+s+'30');break;}
  }
  t=(('1'+s+'7')*('1'+s+'7'))+'';if(t[0]=='1'&&t[2]=='2'&&t[4]=='3'&&t[6]=='4'&&t[8]=='5'&&t[10]=='6'&&t[12]=='7'){
    t=strProd('1'+s+'7','1'+s+'7');
    if(t[14]=='8'&&t[16]=='9'){console.log('1'+s+'70');break;}
  }
}
