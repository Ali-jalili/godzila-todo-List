import { Routes, Route } from "react-router-dom";
import { Home, History, Members, NotFound } from "../Page"

export const Router = () => {

    return (
        <Routes >

            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/Members" element={<Members />} />
            <Route path="*" element={<NotFound />} />


        </Routes>
    )

}