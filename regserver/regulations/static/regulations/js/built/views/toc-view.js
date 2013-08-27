define("toc-view",["jquery","underscore","backbone","regs-dispatch","regs-helpers"],function(e,t,n,r,i){var s=n.View.extend({el:"#toc",events:{"click .regulation-nav a":"sendClickEvent"},initialize:function(){r.on("activeSection:change",this.setActive,this),r.on("openSection:set",this.setActive,this)},setActive:function(e){return this.$el.find(".current").removeClass("current"),this.$el.find("a[data-section-id="+i.findBaseSection(e)+"]").addClass("current"),this},sendClickEvent:function(t){t.preventDefault(),r.trigger("toc:click",e(t.currentTarget).data("section-id"))},scrollToActive:function(){var e=document.querySelectorAll("#table-of-contents .current");e[0]&&e[0].scrollIntoView()}});return s});