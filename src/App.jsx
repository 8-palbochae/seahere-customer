import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TradeMain, TradeBrokerMain } from "./components/trade";
import AlarmHistory from "./components/common/header/AlarmHistory";
import CustomerMain from "./components/main/broker/CustomerMain.jsx";
import AxiosInstanceTest from './components/common/AxiosInstanceTest';
import PrivateRoute from './components/common/PrivateRoute';
import SocialLoading from './components/login_signup/SocialLoading';

import {
	LoginChoice,
	Layout,
	Setting,
	Main,
	InventoryView,
	Income,
	SignUp,
	HistoryOutlet,
	TradeView,
	Cart,
} from "./pages";

import {
	MainSetting,
	UserInfoSetting,
	QrInfo,
	PasswordChange,
	TeamInfo,
	InventorySetting,
	Alarm,
} from "./components/setting";

import {
	SignUpInfo,
} from "./components/login_signup";

import {
	History,
	OutgoingList,
	IncomingList,
	OutgoingReqList,
	AdjustList,
} from "./components/history";

function App() {
  return (
    <>
        <div className="flex justify-center items-center bg-gray-100 jsu">
          <BrowserRouter>
            <Routes>
              {/* 공개된 라우트 */}
              <Route path="/login" element={<LoginChoice />} />
              <Route path="/loading" element={<SocialLoading />} />
              <Route path="/signup" element={<SignUpInfo />}/>

              <Route element={<Layout />}>
                  <Route path="/setting" element={<Setting />}>
                    <Route path="" element={<MainSetting />} />
                    <Route path="users" element={<UserInfoSetting />} />
                    <Route path="qr" element={<QrInfo />} />
                    <Route path="alarm-history" element={<AlarmHistory />} />
                    <Route path="password" element={<PasswordChange />} />
                    <Route path="teams" element={<TeamInfo />} />
                    <Route path="inventories" element={<InventorySetting />} />
                    <Route path="alarms" element={<Alarm />} />
                  </Route>

                  <Route path="/main" element={<CustomerMain />}/>
                  <Route path="outgoings" element={<OutgoingReqList />} />

                  <Route path="/trades" element={<TradeView />}>
                    <Route path="" element={<TradeMain />} />
                    <Route path="broker/:brokerId" element={<TradeBrokerMain />} />
                  </Route>
                  <Route path="/carts" element={<Cart />} />
                  <Route path="/incoming" element={<Income />} />
                  <Route path="/alarm-history" element={<AlarmHistory />} />
                </Route>

              {/* 테스트 라우트 - 로그인 상태와 관계없이 접근 가능 */}
              <Route path="test" element={<AxiosInstanceTest />} />
            </Routes>
          </BrowserRouter>
      </div>
      <PWABadge />
    </>
  )
}

export default App
