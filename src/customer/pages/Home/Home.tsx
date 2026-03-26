import React, { useState } from "react";
import HomeCategory from "./HomeCategory/HomeCategory";
import TopBrand from "./TopBrands/Grid";
import ElectronicCategory from "./Electronic Category/ElectronicCategory";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import ChatBot from "../ChatBot/ChatBot";
import { useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import DealSlider from "./Deals/Deals";

const Home = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const { homePage } = useAppSelector((store) => store);
  const navigate = useNavigate();

  const toggleChatBot = () => setShowChatBot((prev) => !prev);

  const becomeSellerClick = () => {
    navigate("/become-seller");
  };

  if (homePage.loading) {
    return (
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <div className="space-y-16 lg:space-y-24 relative">

        {/*  ELECTRONIC CATEGORY SECTION */}
        {homePage.homePageData?.electricCategories && (
          <section className="pt-5">
            <ElectronicCategory />
          </section>
        )}

        {/*  TOP BRANDS / GRID SECTION */}
        {homePage.homePageData?.grid && (
          <section className="px-5 lg:px-20">
            <TopBrand />
          </section>
        )}

        {/* DEALS SECTION */}
        {homePage.homePageData?.deals && (
          <section className="pt-10">
            <h1 className="text-center text-lg lg:text-4xl font-bold text-[#4ca2e4] pb-10">
              Today's Deals
            </h1>
            <DealSlider />
          </section>
        )}

        {/* SHOP BY CATEGORY SECTION */}
        {homePage.homePageData?.shopByCategories && (
          <section className="py-16 flex flex-col items-center px-5 lg:px-20">
            <h1 className="text-lg lg:text-4xl font-bold text-[#4ca2e4] pb-16">
              SHOP BY CATEGORY
            </h1>
            <HomeCategory />
          </section>
        )}

        {/* SELL YOUR PRODUCT — HERO BANNER */}
        <section className="lg:px-20 relative h-[240px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg">
          <img
            className="w-full h-full object-cover brightness-[0.7]"
            src="/seller_banner_image.jpg"
            alt="Seller Banner"
          />

          <div className="absolute top-1/2 left-6 lg:left-40 transform -translate-y-1/2 text-white space-y-4 lg:space-y-6">
            <h1 className="text-2xl lg:text-5xl font-bold">Sell Your Product</h1>

            <p className="text-lg md:text-2xl font-light">
              With
              <strong className="logo pl-2 text-3xl md:text-5xl">MaDeAn Hive</strong>
            </p>

            <Button
              onClick={becomeSellerClick}
              startIcon={<StorefrontIcon />}
              variant="contained"
              sx={{ borderRadius: "12px", padding: "10px 24px" }}
            >
              Become Seller
            </Button>
          </div>
        </section>

        {/* ==============================
            🔹 FLOATING CHATBOT BUTTON
           =============================== */}
        <section className="fixed bottom-10 right-10 z-50">
          {showChatBot ? (
            <ChatBot handleClose={toggleChatBot} />
          ) : (
            <Button
              onClick={toggleChatBot}
              sx={{ borderRadius: "50%" }}
              variant="contained"
              className="h-16 w-16 flex justify-center items-center shadow-xl"
            >
              <ChatBubbleIcon sx={{ color: "white", fontSize: "2rem" }} />
            </Button>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
