import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói về BookingCare
        </div>
        <div className="section-content-about">
          <div className="content-left-about">
            <iframe
              width="100%"
              height="410"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right-about">
            <p>Trung tâm Sức khỏe Nam Giới Men’s Health được bác sĩ Trà Anh Duy thành lập vào năm 2016. Đến nay trung tâm đã có được danh tiếng nhất định và được nhiều anh em tìm kiếm khi cần địa chỉ thăm khám nam khoa tại TPHCM. Vậy đánh giá chung Trung tâm Men’s Health có tốt không?</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
