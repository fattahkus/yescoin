import moment from 'moment';
import fetch from "node-fetch";
import delay from "delay";
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
(async () => {
    while (true) {
      try{

        const query = ""
        
        let totalTap = getRandomInt(1, 100);

        const getToken = await GetToken(query)
        console.log(getToken.data.token)
        const getUserInfo = await GetUserInfo(getToken.data.token)
        console.log(getUserInfo)
        if(getToken.data.token){
          const tapCoin = await TapCoin(getToken.data.token, totalTap)
          console.log(tapCoin)
          if(tapCoin.message == 'Success'){
            if(getUserInfo.message == 'Success'){
              console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"UserId : "+getUserInfo.data.userId+" | Status : "+tapCoin.message+" | Coin Collected : "+tapCoin.data.collectAmount)
              console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Coin Balance : "+getUserInfo.data.currentAmount+" | Rank : "+getUserInfo.data.rank+" | Level : "+getUserInfo.data.userLevel+" | Invited : "+getUserInfo.data.inviteAmount)
              await delay(2500) // delay 2,5 seconds
              
              const getAccountBuildInfo = await GetAccountBuildInfo(getToken.data.token)
              // Try To Upgrade coinPoolRecovery Level
              if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.coinPoolRecoveryUpgradeCost){
                const coinPoolRecovery = await coinPoolRecoveryUpgrade(getToken.data.token)
                console.log(coinPoolRecovery)
                if(coinPoolRecovery.message == 'Success'){
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"coinPoolRecovery upgrade "+coinPoolRecovery.message+"...")
                }else{
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"coinPoolRecovery upgrade "+coinPoolRecovery.message+"...")
                }
              }else{
                // console.log("Not Enought Coin Balance To Upgrade coinPoolRecovery...")
              }
              // Try To Upgrade coinPoolTotalLevel Level
              if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.coinPoolTotalUpgradeCost){
                const coinPoolTotalLevel = await coinPoolTotalLevelUpgrade(getToken.data.token)
                console.log(coinPoolTotalLevel)
                if(coinPoolTotalLevel.message == 'Success'){
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"coinPoolTotalLevel upgrade "+coinPoolTotalLevel.message+"...")
                }else{
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"coinPoolTotalLevel upgrade "+coinPoolTotalLevel.message+"...")
                }
              }else{
                // console.log("Not Enought Coin Balance To Upgrade coinPoolTotalLevel...")
              }
              // Try To Upgrade singleCoinLevel Level
              if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.singleCoinUpgradeCost){
                const singleCoinLevel = await singleCoinLevelUpgrade(getToken.data.token)
                console.log(singleCoinLevel)
                if(singleCoinLevel.message == 'Success'){
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"singleCoinLevel upgrade "+singleCoinLevel.message+"...")
                }else{
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"singleCoinLevel upgrade "+singleCoinLevel.message+"...")
                }
              }else{
                // console.log("Not Enought Coin Balance To Upgrade singleCoinLevel...")
              }
              // Try To Upgrade swipeBotSpeedValue Level
              if(getUserInfo.data.currentAmount > getAccountBuildInfo.data.swipeBotUpgradeCost){
                const swipeBotSpeedValue = await swipeBotSpeedValueUpgrade(getToken.data.token)
                console.log(swipeBotSpeedValue)
                if(swipeBotSpeedValue.message == 'Success'){
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"swipeBotSpeedValue upgrade "+swipeBotSpeedValue.message+"...")
                }else{
                  console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"swipeBotSpeedValue upgrade "+swipeBotSpeedValue.message+"...")
                }
              }else{
                // console.log("Not Enought Coin Balance To Upgrade swipeBotSpeedValue...")
              }

            }else{
              console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Get User Info Failed...")
            }
          }else{
            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Tap Coin Collect Failed : "+tapCoin.message+", Delay 1 Minute...")
            await delay(60000)
          }
        }else{
          console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Get Bearer Token Failed...")
        }
        console.log("")
      } catch (e) {
          console.log(e)
          console.log('')
      }
    }
})();