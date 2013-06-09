(function () {
"use strict";
window.html5ks = {
  STUB: function (fn) {
    return console.log("STUB: " + fn);
  },
  WARN: function (msg) {
    return console.log("WARN: " + msg);
  },
  persistent: {
    seen_scenes: {},
    attraction: {
      kenji: 0,
      sc: 0,
      hanako: 0
    },
    hdisabled: false
  },
  save: function () {
    localStorage.persistent = JSON.stringify(this.persistent);
  },
  elements: {
    video: document.getElementById("video"),
    audio: {
      music: document.getElementById("music"),
      ambient: document.getElementById("ambient"),
      sound: document.getElementById("sound")
    }
  },
  seen_scene: function (scene) {
    return !!this.persistent.seen_scenes[scene];
  },
  scene_register: function (scene) {
    this.persistent.seen_scenes.scene = true;
  },
  music: {
    "music_tranquil": "Afternoon",
    "music_nurse": "Ah_Eh_I_Oh_You",
    "music_soothing": "Air_Guitar",
    "music_twinkle": "Aria_de_l'Etoile",
    "music_moonlight": "Breathlessly",
    "music_rain": "Caged_Heart",
    "music_tragic": "Cold_Iron",
    "music_comfort": "Comfort",
    "music_lilly": "Concord",
    "music_daily": "Daylight",
    "music_ease": "Ease",
    "music_another": "Everyday_Fantasy",
    "music_friendship": "Friendship",
    "music_happiness": "Fripperies",
    "music_comedy": "Generic_Happy_Music",
    "music_tension": "High_Tension",
    "music_running": "Hokabi",
    "music_innocence": "Innocence",
    "music_heart": "Letting_my_Heart_Speak",
    "music_serene": "Lullaby_of_Open_Eyes",
    "music_drama": "Moment_of_Decision",
    "music_night": "Nocturne",
    "music_kenji": "Out_of_the_Loop",
    "music_hanako": "Painful_History",
    "music_rin": "Parity",
    "music_timeskip": "Passing_of_Time",
    "music_dreamy": "Raindrops_and_Puddles",
    "music_jazz": "Red_Velvet",
    "music_romance": "Romance_in_Andante_II",
    "music_credits": "Romance_in_Andante",
    "music_musicbox": "Sarabande_from_BWV1010,_Musicbox",
    "music_normal": "School_Days",
    "music_sadness": "Shadow_of_the_Truth",
    "music_emi": "Standing_Tall",
    "music_pearly": "Stride",
    "music_shizune": "The_Student_Council",
    "music_one": "To_Become_One",
    "music_menus": "Wiosna",
  },
  sfx: {
    sfx_tcard: "sfx/tcard.ogg",
    sfx_4lslogo: "sfx/4lsaudiologo.ogg",
    sfx_alarmclock: "sfx/alarm.ogg",
    sfx_normalbell: "sfx/carillon.ogg",
    sfx_warningbell: "sfx/chaimu.ogg",
    sfx_crunchydeath: "sfx/crunch.ogg",
    sfx_fireworks: "sfx/fireworks.ogg",
    sfx_rain: "sfx/rain.ogg",
    sfx_rustling: "sfx/rustling.ogg",
    sfx_impact: "sfx/wumph.ogg",
    sfx_impact2: "sfx/wumph_2.ogg",
    sfx_heartfast: "sfx/heart_single_fast.ogg",
    sfx_heartslow: "sfx/heart_single_slow.ogg",
    sfx_heartstop: "sfx/heart_stop.ogg",
    sfx_emijogging: "sfx/emijogging.ogg",
    sfx_emirunning: "sfx/emirunning.ogg",
    sfx_emipacing: "sfx/emipacing.ogg",
    sfx_emisprinting: "sfx/emisprinting.ogg",
    sfx_startpistol: "sfx/startpistol.ogg",
    sfx_crowd_indoors: "sfx/crowd_indoors.ogg",
    sfx_crowd_outdoors: "sfx/crowd_outdoors.ogg",
    sfx_crowd_cheer: "sfx/crowd_cheer.ogg",
    sfx_doorknock: "sfx/doorknock.ogg",
    sfx_doorknock2: "sfx/doorknock2.ogg",
    sfx_doorslam: "sfx/doorslam.ogg",
    sfx_doorclose: "sfx/doorclose.ogg",
    sfx_cicadas: "sfx/cicadas.ogg",
    sfx_scratch: "sfx/scratch.ogg",
    sfx_traffic: "sfx/traffic.ogg",
    sfx_rumble: "sfx/rumble.ogg",
    sfx_skid: "sfx/skid2.ogg",
    sfx_gymbounce: "sfx/emibounce.ogg",
    sfx_hammer: "sfx/hammer.ogg",
    sfx_birdstakeoff: "sfx/birdstakeoff.ogg",
    sfx_storebell: "sfx/storebell.ogg",
    sfx_thunder: "sfx/thunder.ogg",
    sfx_slide: "sfx/slide.ogg",
    sfx_slide2: "sfx/slide2.ogg",
    sfx_draw: "sfx/sword_draw.ogg",
    sfx_shower: "sfx/shower.ogg",
    sfx_switch: "sfx/switch.ogg",
    sfx_pillow: "sfx/pillow.ogg",
    sfx_cellphone: "sfx/cellphone.ogg",
    sfx_door_creak: "sfx/door_creak.ogg",
    sfx_dooropen: "sfx/dooropen.ogg",
    sfx_dropglasses: "sfx/dropglasses.ogg",
    sfx_can: "sfx/can.ogg",
    sfx_stallbuilding: "sfx/stallbuilding.ogg",
    sfx_parkambience: "sfx/parkambience.ogg",
    sfx_trainint: "sfx/trainint.ogg",
    sfx_footsteps_hard: "sfx/footsteps_hard.ogg",
    sfx_footsteps_soft: "sfx/footsteps_soft.ogg",
    sfx_paper: "sfx/paper.ogg",
    sfx_paperruffling: "sfx/paperruffling.ogg",
    sfx_rooftop: "sfx/rooftop.ogg",
    sfx_lighter: "sfx/lighter.ogg",
    sfx_phone: "sfx/phone.ogg",
    sfx_hollowclick: "sfx/hollowclick.ogg",
    sfx_businterior: "sfx/businterior.ogg",
    sfx_teacup: "sfx/teacup.ogg",
    sfx_can_clatter: "sfx/can_clatter.ogg",
    sfx_snap: "sfx/snap.ogg",
    sfx_billiards_break: "sfx/billiards_break.ogg",
    sfx_billiards: "sfx/billiards.ogg",
    sfx_lock: "sfx/lock.ogg",
    sfx_dropstuff: "sfx/dropstuff.ogg",
    sfx_camera: "sfx/camera.ogg",
    sfx_time: "sfx/time.ogg",
    sfx_flash: "sfx/flash.ogg",
    sfx_whiteout: "sfx/whiteout.ogg"
  },
  play: function (channel, name, fade) {
    if (fade) this.WARN("fade not implemented");
    var deferred = when.defer(),
        audio = this.elements.audio[channel];
    audio.src = "/dump/" + (channel === "music" ? "bgm/" + this.music[name] + ".ogg" : this.sfx[name]);
    audio.load();
    audio.play();
    audio.addEventListener("ended", function () {
      deferred.resolve(this);
    }, false);
    audio.addEventListener("error", function () {
      deferred.reject(this.error);
    }, false);
    return deferred.promise;
  },
  play_video: function (vid_src) {
    var deferred = when.defer(),
        video = this.elements.video;
    video.src = "/dump/video/" + vid_src + ".webm";
    video.load();
    video.play();
    video.addEventListener("ended", function () {
      deferred.resolve(this);
    }, false);
    video.addEventListener("error", function () {
      deferred.reject(this.error);
    }, false);
    return deferred.promise;
  },
  act_op: function (this_video) {
    // strip off extension
    return this.play_video(this_video.slice(0,-4));
  },
  iscene: function (target, is_h, is_end) {
    this.scene_register(target);
    return window.script[target]();
  },
  window: function (action, transition) {
    var deferred = when.defer();
    setTimeout(function () {
      deferred.resolve(action);
    }, 100);
    return deferred.promise;
  },
  sceneTypes: {
    "ev": "event",
    "evh": "event",
    "ovl": "event",
    "bg": "bgs",
    "": "vfx"
  },

  // NOT iscene
  scene: function (type, name) {
    var deferred = when.defer();
    if (typeof name == "undefined") name = type;
    this.WARN("don't know extension, trying all");
    var bg = document.getElementById("bg");
    var img = "/dump/" + this.sceneTypes[type] + "/" + name;
    bg.onerror = function () {
      bg.onerror = function () {
        bg.onerror = function () {
          deferred.reject(this.error);
        };
        bg.src = img + ".jpg";
      };
      bg.src = img + ".png";
    };
    bg.onload = function () {
      deferred.resolve(this);
    };
    bg.src = img + ".webp";
    return deferred.promise;
  }
};
}());
