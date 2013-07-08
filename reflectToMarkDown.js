var globalObject;
function reflectToMarkDown(objName, sUseThisName, scope) {
  var UNDEFINED = '-';
  var obj = eval(objName);
  objName = (typeof sUseThisName!='undefined') ? sUseThisName + ((typeof scope!=='undefined') ? ' ('+scope+'&#41;' : '') : objName;
  var sMKDown = '';
  var reflected = [];
  for(a in obj) {
    reflected.push(a);
  };
  reflected = reflected.sort(function(a,b){
    return (a>b) ? 1 : -1;
  });

  var s = '';
  var sofar = '';
  var temp = objName.split('.');
  for(var i=0; i<temp.length; i++) {
    sofar+=((sofar!=='') ? '.' : '') + temp[i];
    s+=((s!=='') ? '.' : '')+'['+temp[i]+']('+(sofar.replace(/\./g, ' '))+'.md)';
  }

  sMKDown+='### '+s+'\n\n';
  sMKDown+='| Name | Type | Value |\n| ------------- | ------------- | ----- |\n';

  for(var i=0; i<reflected.length; i++) {
    var a = reflected[i];
    var value = obj[a];
    var sType = (a.indexOf('on')===0) ? '_delegate_ (function&#41;' : typeof value;
    var sParms = '';
    if (sType==='function') {
       sParms = value.toString().split(/\)\{/);
        if (sParms.length>0) {
          sParms = sParms[0].split('(');
          if (sParms.length>0) {
            var typo = typeof sParms[1];
            if (typo==='undefined' || typo==='null') {
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
        sParms = '';
        
     } else {
      try {
        sParms = value.toString();
      } catch(e) {

      }
       
    }
    sMKDown+='| ['+a+']('+temp.join(' ')+' '+a+') | ['+sType+']('+sType+') |  '+sParms+'  |\n';
  };
  console.log(sMKDown+'\nCreated using [reflectToMarkDown.js](reflectToMarkDown.js) on '+new Date()+'<br/>Using '+navigator.appVersion);
}