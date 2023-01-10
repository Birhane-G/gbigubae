import React from "react";
import Graduation from "../../assets/image/Graduation.png";
import "./blog.css";
export const BlogSection = () => {
  return (
    <div className="blog">
      <div className="section_title">
        <h1>ምን አዲስ ?</h1>
      </div>
      <div className="blogSection_container">
        <div className="Card_container">
          <div className="card">
            <div className="Image">
              <img src={Graduation} alt="" />
            </div>
            <div className="Text_container">
              <div className="Tiltle">
                <h1>ምን አዲስ ?</h1>
              </div>
              <div className="discription">
                <p>
                  ሐዊረ ሕይወቱን ያዘጋጅው የዴንማርክ ግንኝነት ጣቢያ ከደ/ም/ቅ/ አማኑኤል እና ከሉንድ ደ/ም/ቅ/
                  ማርያም ቤ/ንሰበካ ጉባኤያት ጋር በመተባበር ነው። በዚህ መርሐ ግብር ላይ የሁለቱ አብያተ
                  ክርስቲያናት ምእመናን እናበአጎራባች የሚገኙ አጥቢያዎች፣ አጠቃላይ ከ200 በላይ የሚሆኑ ምእመናን
                  ተሳተፈዋል። የሁለቱም አጥቢያዎችአስተዳዳሪ መልአከ ምሕረት ቆሞስ አባ ዘሚካኤል ደሬሳ፥ መጋቤ
                  ሃይማኖት ቀሲስ ኃይለ ማርያም አያሌው እናመልአከ መዊእ ቀሲስ ሃይለ ጊዮርጊስ አሰፋ ተገኝተው ቃለ
                  እግዚአብሔር እና ምክር ሰጥተዋል።
                </p>
                <div className="readmore">
                  <a href="/">Readmore</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="Image">
              <img src={Graduation} alt="" />
            </div>
            <div className="Text_container">
              <div className="Tiltle">
                <h1>ምን አዲስ ?</h1>
              </div>
              <div className="discription">
                <p>
                  ሐዊረ ሕይወቱን ያዘጋጅው የዴንማርክ ግንኝነት ጣቢያ ከደ/ም/ቅ/ አማኑኤል እና ከሉንድ ደ/ም/ቅ/
                  ማርያም ቤ/ንሰበካ ጉባኤያት ጋር በመተባበር ነው። በዚህ መርሐ ግብር ላይ የሁለቱ አብያተ
                  ክርስቲያናት ምእመናን እናበአጎራባች የሚገኙ አጥቢያዎች፣ አጠቃላይ ከ200 በላይ የሚሆኑ ምእመናን
                  ተሳተፈዋል። የሁለቱም አጥቢያዎችአስተዳዳሪ መልአከ ምሕረት ቆሞስ አባ ዘሚካኤል ደሬሳ፥ መጋቤ
                  ሃይማኖት ቀሲስ ኃይለ ማርያም አያሌው እናመልአከ መዊእ ቀሲስ ሃይለ ጊዮርጊስ አሰፋ ተገኝተው ቃለ
                  እግዚአብሔር እና ምክር ሰጥተዋል።
                </p>
                <div className="readmore">
                  <a href="/">Readmore</a>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <div>
              <span>123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
