const express = require("express");
const ytdl = require("ytdl-core");
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffmpeg = require('fluent-ffmpeg');
// ffmpeg.setFfmpegPath(ffmpegPath);

const path = require("path");
const fs = require("fs");
const app = express();
app.get("/", (req, res) => {
  var downloadFolder = path.join(process.env.USERPROFILE, "/Downloads/");

  const url = req.query.url
    ? req.query.url
    : "https://www.youtube.com/embed/wz-ZkPEGyeo?start=10&end=15";
  // : "https://www.youtube.com/watch?v=wz-ZkPEGyeo?start=10&end=15";
  // console.log('url: ', url);return
  // const output = path.resolve(__dirname, `${Date.now()}_video.mp4`);

  // const video = ytdl.downloadFromInfo(url,{filter:'audioandvideo'});
  // video.pipe(fs.createWriteStream(output));
  ytdl(url, { filter: "audioonly" }).pipe(
    fs.createWriteStream(`${downloadFolder}${Date.now()}_video.mp3`)
  );
});
app.listen(3000);

