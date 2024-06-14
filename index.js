import moment from 'moment';
import fetch from "node-fetch";
import delay from "delay";
import fs from "fs";
import { Twisters } from "twisters";
import { setTimeout } from 'timers/promises';

const GetToken = (query) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/user/login", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: `{"code":"${query}"}`,
        method: "POST",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const TapCoin = (bearer,totalTap) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/game/collectCoin", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": bearer
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: totalTap,
        method: "POST",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

const GetUserInfo = (bearer) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/account/getAccountInfo", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": bearer
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const GetAccountBuildInfo = (bearer) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/build/getAccountBuildInfo", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": bearer
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const coinPoolRecoveryUpgrade = (bearer) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/build/levelUp", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": bearer
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "2",
        method: "POST",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const coinPoolTotalLevelUpgrade = (bearer) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/build/levelUp", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": bearer
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "3",
        method: "POST",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const singleCoinLevelUpgrade = (bearer) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/build/levelUp", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": bearer
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "1",
        method: "POST",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const swipeBotSpeedValueUpgrade = (bearer) =>
    new Promise((resolve, reject) => {
      fetch("https://api.yescoin.gold/build/levelUp", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"124\", \"Microsoft Edge\";v=\"124\", \"Not-A.Brand\";v=\"99\", \"Microsoft Edge WebView2\";v=\"124\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "token": bearer
        },
        referrer: "https://www.yescoin.gold/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "4",
        method: "POST",
        mode: "cors",
        credentials: "omit"
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const readFileToJSON = (path) => {
        return JSON.parse(fs.readFileSync(path, "utf8"));
      };
      let getUserId;
(async () => {
    const queryList = readFileToJSON("./yescoin.json");
    const twisters = new Twisters();
    let getUserInfo;
    
    while (true) {
        await Promise.all(
            queryList.map(async (query) => {
                try{
                  
                  let totalTap = getRandomInt(1, 100);
                  const getToken = await GetToken(query)
                  // console.log(getToken.data.token)

                if(getToken.data.token){
                    const tapCoin = await TapCoin(getToken.data.token, totalTap)
                    getUserInfo = await GetUserInfo(getToken.data.token)
                    getUserId = getUserInfo.data.userId
                      const getAccountBuildInfo = await GetAccountBuildInfo(getToken.data.token)
                      // console.log(getUserInfo)
                    if(getUserInfo.message == 'Success'){
                            if(tapCoin.message == 'Success'){
                                twisters.put(getUserId, {
                                text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | Tap ${totalTap} Status : ${tapCoin.message}`});
                                // await delay(2500) // delay 2,5 seconds   

                            // Try To Upgrade coinPoolRecovery Level
                            if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.coinPoolRecoveryUpgradeCost){
                                const coinPoolRecovery = await coinPoolRecoveryUpgrade(getToken.data.token)
                                if(coinPoolRecovery.message == 'Success'){
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | coinPoolRecovery upgrade : ${coinPoolRecovery.message}`});
                                }else{
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | coinPoolRecovery upgrade : ${coinPoolRecovery.message}`});
                                }
                            }

                            // Try To Upgrade coinPoolTotalLevel Level
                            if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.coinPoolTotalUpgradeCost){
                                const coinPoolTotalLevel = await coinPoolTotalLevelUpgrade(getToken.data.token)
                                if(coinPoolTotalLevel.message == 'Success'){
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | coinPoolTotalLevel upgrade : ${coinPoolTotalLevel.message}`});
                                }else{
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | coinPoolTotalLevel upgrade : ${coinPoolTotalLevel.message}`});
                                }
                            }

                            // Try To Upgrade singleCoinLevel Level
                            if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.singleCoinUpgradeCost){
                                const singleCoinLevel = await singleCoinLevelUpgrade(getToken.data.token)
                                if(singleCoinLevel.message == 'Success'){
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | singleCoinLevel upgrade : ${singleCoinLevel.message}`});
                                }else{
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | singleCoinLevel upgrade : ${singleCoinLevel.message}`});
                                }
                            }
                            
                            // Try To Upgrade swipeBotSpeedValue Level
                            if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.swipeBotUpgradeCost){
                                const swipeBotSpeedValue = await swipeBotSpeedValueUpgrade(getToken.data.token)
                                if(swipeBotSpeedValue.message == 'Success'){
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | swipeBotSpeedValue upgrade : ${swipeBotSpeedValue.message}`});
                                }else{
                                    twisters.put(getUserId, {
                                    text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | swipeBotSpeedValue upgrade : ${swipeBotSpeedValue.message}`});
                                }
                            }
                            }else{
                                twisters.put(getUserId, {
                                text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | Failed ${tapCoin.message}...`});
                            } 
                    }else{
                        twisters.put(getUserId, {
                        text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${getUserInfo.data.userId}] 🪙 ${getUserInfo.data.currentAmount} 🏆 ${getUserInfo.data.rank} ⬆ ${getUserInfo.data.userLevel} 👥 ${getUserInfo.data.inviteAmount} | Get User Info Failed...`});
                    }
                }else{
                    twisters.put(getUserId, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] Get Bearer Token Failed...`});
                }
                } catch (e) {
                    // console.log(e)
                    // console.log('')
                    twisters.put(getUserId, {
                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] Bad gateway...`});
                }
            }))
            // Delay 0.5s for each loop
            await delay(500);
    }
})();