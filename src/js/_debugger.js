    var me = {
        // Atributtes
        debugger: null,
        // Methods
        setDebugger: function (inDebugger) {
            this.debugger = inDebugger;
        }
    };
    var meDebugger = {
        serviceWorkers: true,
        message:function(object,file,message){
            console.log("["+object+"] "+"@ "+file+" : "+"'"+message+"'");
        },
        audit:function(){
            
            //Check Meta Titles
            
            
        }
    }
    me.setDebugger(meDebugger);
