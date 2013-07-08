function reflectToMarkDown(objName) {
  var UNDEFINED = '-';
  var obj = eval(objName);
  var sMKDown = '';
  var reflected = [];
  for(a in obj) {
    reflected.push(a);
  };
  reflected = reflected.sort(function(a,b){
    return (a>b) ? 1 : -1;
  });
  sMKDown+='### ['+objName+']('+objName+'.md)\n\n';
  sMKDown+='| Name | Type | Parameters |\n| ------------- | ------------- | ----- |\n';

  for(var i=0; i<reflected.length; i++) {
    var a = reflected[i];
    var value = obj[a];
    var sType = typeof value;
    var sParms = ''
    if (sType==='function') {
      sParms = value.toString().split(/\)\{/);
        if (sParms.length>0) {
          sParms = sParms[0].split('(');
          if (sParms.length>0) {
            if (typeof sParms[1]==='undefined') {
              sParms = UNDEFINED
            } else {
              if (sParms[1].split(',').length<0 || sParms[1].indexOf('native code')>-1) {
                sParms = UNDEFINED;
              } else {
                sParms = sParms[1];
              }
            }
    
          } else {
            sParms = UNDEFINED;
          };
        } else {
          sParms = UNDEFINED;
        };
        
        if (sParms===UNDEFINED) {
          a+= '(&#41;';
        } else {
          sParms = sParms.split('\n')[0];  
          a+= '('+sParms+'&#41;';
        }
        
     } else {
      try {
        sParms = value.toString();
      } catch(e) {

      }
       
    }
    sMKDown+='| ['+a+']('+a+') | ['+sType+']('+sType+') |  '+sParms+'  |\n';
  };
  console.log(sMKDown+'\nCreated using [reflectToMarkDown.js](reflectToMarkDown.js) on '+new Date());
}