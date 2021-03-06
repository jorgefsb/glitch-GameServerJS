var name		= "Slime Harvester";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Unsqueamishly scooped 41 quivering Jellisac clumps";
var status_text		= "It takes a certain amount of chutzpah to scoop up a Jellisac with one's bare hands. To do this 41 times takes exactly 41 times that amount. You're a bonafide Slime Harvester, you are.";
var last_published	= 1348802579;
var is_shareworthy	= 1;
var url		= "slime-harvester";
var category		= "harvesting";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/slime_harvester_1315685979.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/slime_harvester_1315685979_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/slime_harvester_1315685979_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/slime_harvester_1315685979_40.png";
function on_apply(pc){
	
}
var conditions = {
	514 : {
		type	: "counter",
		group	: "jellisac",
		label	: "scoop",
		value	: "41"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(250 * multiplier), true);
	pc.stats_add_favor_points("grendaline", round_to_5(30 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 250,
	"favor"	: {
		"giant"		: "grendaline",
		"points"	: 30
	}
};

//log.info("slime_harvester.js LOADED");

// generated ok (NO DATE)
