import React from "react";
import Graduation from "../../assets/image/Graduation.png"
import "./blog.css"
export const BlogSection = () => {
  return (
    <div className="blogSection_container">
      <div className="Card_container">
        <div className="Image">
          <img src={Graduation} alt="" />
        </div>
        <div className="Text_container">
          <div className="Tiltle">ምን አዲስ ?</div>
          <div className="discription">
            ሐዊረ ሕይወቱን ያዘጋጅው የዴንማርክ ግንኝነት ጣቢያ ከደ/ም/ቅ/ አማኑኤል እና ከሉንድ ደ/ም/ቅ/ ማርያም
            ቤ/ንሰበካ ጉባኤያት ጋር በመተባበር ነው። በዚህ መርሐ ግብር ላይ የሁለቱ አብያተ ክርስቲያናት ምእመናን
            እናበአጎራባች የሚገኙ አጥቢያዎች፣ አጠቃላይ ከ200 በላይ የሚሆኑ ምእመናን ተሳተፈዋል። የሁለቱም
            አጥቢያዎችአስተዳዳሪ መልአከ ምሕረት ቆሞስ አባ ዘሚካኤል ደሬሳ፥ መጋቤ ሃይማኖት ቀሲስ ኃይለ ማርያም አያሌው
            እናመልአከ መዊእ ቀሲስ ሃይለ ጊዮርጊስ አሰፋ ተገኝተው ቃለ እግዚአብሔር እና ምክር ሰጥተዋል።
          </div>
        </div>
      </div>
    </div>
  );
};
