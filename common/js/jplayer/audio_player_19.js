// JavaScript Document

$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_01.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_01.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_01.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		wmode: "window"
	});

	$("#jquery_jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_02.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_02.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_02.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_2",
		wmode: "window"
	});

	$("#jquery_jplayer_3").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_03.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_03.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_03.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_3",
		wmode: "window"
	});

	$("#jquery_jplayer_4").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_04.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_04.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_04.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_4",
		wmode: "window"
	});


	$("#jquery_jplayer_5").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_05.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_05.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_05.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_5",
		wmode: "window"
	});


	$("#jquery_jplayer_6").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_06.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_06.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_06.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_6",
		wmode: "window"
	});

	$("#jquery_jplayer_7").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_07.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_07.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_07.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_7",
		wmode: "window"
	});

	$("#jquery_jplayer_8").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_08.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_08.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_08.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_8",
		wmode: "window"
	});

	$("#jquery_jplayer_9").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_09.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_09.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_09.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_9",
		wmode: "window"
	});


	$("#jquery_jplayer_10").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_10.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_10.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_10.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_10",
		wmode: "window"
	});


	$("#jquery_jplayer_11").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_11.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_11.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_11.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_11",
		wmode: "window"
	});


	$("#jquery_jplayer_12").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_12.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_12.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_12.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_12",
		wmode: "window"
	});


	$("#jquery_jplayer_13").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_13.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_13.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_13.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_13",
		wmode: "window"
	});


	$("#jquery_jplayer_14").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_14.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_14.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_14.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_14",
		wmode: "window"
	});


	$("#jquery_jplayer_15").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_15.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_15.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_15.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_15",
		wmode: "window"
	});



	$("#jquery_jplayer_16").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_16.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_16.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_16.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_16",
		wmode: "window"
	});



	$("#jquery_jplayer_17").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_17.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_17.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_17.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_17",
		wmode: "window"
	});

	$("#jquery_jplayer_18").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_18.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_18.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_18.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_18",
		wmode: "window"
	});

	$("#jquery_jplayer_19").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_19.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_19.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_19.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_19",
		wmode: "window"
	});


	$("#jquery_jplayer_20").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_20.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_20.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_20.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_20",
		wmode: "window"
	});

	$("#jquery_jplayer_21").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_21.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_21.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_21.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_21",
		wmode: "window"
	});


	$("#jquery_jplayer_22").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_22.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_22.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_22.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_22",
		wmode: "window"
	});



	$("#jquery_jplayer_23").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_23.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_23.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_23.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_23",
		wmode: "window"
	});



	$("#jquery_jplayer_24").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_24.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_24.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_24.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_24",
		wmode: "window"
	});



	$("#jquery_jplayer_25").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_25.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_25.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_25.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_25",
		wmode: "window"
	});


	$("#jquery_jplayer_26").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_26.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_26.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_26.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_26",
		wmode: "window"
	});


	$("#jquery_jplayer_27").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_27.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_27.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_27.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_27",
		wmode: "window"
	});



	$("#jquery_jplayer_28").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_28.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_28.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_28.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_28",
		wmode: "window"
	});



	$("#jquery_jplayer_29").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_29.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_29.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_29.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_29",
		wmode: "window"
	});


	$("#jquery_jplayer_30").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_30.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_30.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_30.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_30",
		wmode: "window"
	});


	$("#jquery_jplayer_31").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_31.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_31.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_31.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_31",
		wmode: "window"
	});


	$("#jquery_jplayer_32").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_32.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_32.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_32.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_32",
		wmode: "window"
	});


	$("#jquery_jplayer_33").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_33.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_33.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_33.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_33",
		wmode: "window"
	});


	$("#jquery_jplayer_34").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_34.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_34.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_34.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_34",
		wmode: "window"
	});


	$("#jquery_jplayer_35").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_35.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_35.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_35.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_35",
		wmode: "window"
	});

	$("#jquery_jplayer_36").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_36.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_36.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_36.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_36",
		wmode: "window"
	});


	$("#jquery_jplayer_37").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_37.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_37.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_37.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_37",
		wmode: "window"
	});



	$("#jquery_jplayer_38").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_38.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_38.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_38.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_38",
		wmode: "window"
	});


	$("#jquery_jplayer_39").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/19_39.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/19_39.m4a",	/* m4a (AAC) */
				oga: "common/voice/19_39.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_39",
		wmode: "window"
	});


});


