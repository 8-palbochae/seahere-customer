import { useState } from "react";
import reactLogo from "./assets/react.svg";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TradeMain, TradeBrokerMain } from "./components/trade";
import AlarmHistory from "./components/common/header/AlarmHistory";
import CustomerMain from "./components/main/CustomerMain.jsx";
import AxiosInstanceTest from "./components/common/AxiosInstanceTest";
import PrivateRoute from "./components/common/PrivateRoute";
import SocialLoading from "./components/login_signup/SocialLoading";

import { LoginChoice, Layout, Setting, Main, TradeView, Cart } from "./pages";

import {
	MainSetting,
	UserInfoSetting,
	PasswordChange,
} from "./components/setting";

import { SignUpInfo } from "./components/login_signup";
import Outgoing from "./pages/Outgoing.jsx";
import { pad2 } from "./../node_modules/@ctrl/tinycolor/dist/module/util";
import OutgoingList from "./components/outgoing/page/OutgoingList.jsx";
import OutgoingDetailList from "./components/outgoing/page/OutgoingDetailList.jsx";
import { TokenProvider } from "./hooks/fcm/TokenContext";
function App() {
	return (
		<>
			<div className="flex justify-center items-center bg-gray-100 jsu">
				<TokenProvider>
					<BrowserRouter>
						<Routes>
							{/* 공개된 라우트 */}
							<Route path="/login" element={<LoginChoice />} />
							<Route
								path="/loading"
								element={<SocialLoading />}
							/>
							<Route path="/signup" element={<SignUpInfo />} />
							<Route element={<PrivateRoute />}>
								<Route element={<Layout />}>
									<Route path="/setting" element={<Setting />}>
										<Route path="" element={<MainSetting />} />
										<Route
											path="users"
											element={<UserInfoSetting />}
										/>
										<Route
											path="password"
											element={<PasswordChange />}
										/>
									</Route>

									<Route
										path="/main"
										element={<CustomerMain />}
									/>

									<Route path="/trades" element={<TradeView />}>
										<Route path="" element={<TradeMain />} />
										<Route
											path="broker/:brokerId"
											element={<TradeBrokerMain />}
										/>
									</Route>

									<Route path="/outgoings" element={<Outgoing />}>
										<Route path="" element={<OutgoingList />} />
										<Route
											path=":outgoingId"
											element={<OutgoingDetailList />}
										/>
									</Route>

									<Route path="/carts" element={<Cart />} />
									<Route
										path="/alarm-history"
										element={<AlarmHistory />}
									/>
								</Route>
							</Route>
					
						</Routes>
					</BrowserRouter>
				</TokenProvider>
			</div>
			<PWABadge />
		</>
	);
}

export default App;
