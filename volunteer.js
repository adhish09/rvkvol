import { TextField, Button } from "@mui/material";

const GETInvolvedVolunteer = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#d8d8d8",
        width: "100%",
        height: "1770px",
        textAlign: "left",
        fontSize: "72px",
        color: "#eee",
        fontFamily: "Habibi",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "150px",
          left: "50px",
          background:
            "linear-gradient(95.09deg, rgba(226, 148, 36, 0.83), rgba(106, 241, 209, 0.61))",
          width: "1340px",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "155px",
            left: "50px",
            display: "flex",
            alignItems: "center",
            width: "633px",
            height: "67px",
            textShadow: "4px 4px 4px rgba(0, 255, 194, 0.25)",
          }}
        >
          Volunteer For RVK
        </div>
        <div
          style={{
            position: "absolute",
            top: "232px",
            left: "69px",
            fontSize: "18px",
            letterSpacing: "0.1em",
            fontWeight: "300",
            fontFamily: "'Open Sans'",
            color: "#000",
          }}
        >{`Join the Network of People who Offer their Time & Expertise`}</div>
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "740px",
            width: "600px",
            height: "400px",
            objectFit: "cover",
          }}
          alt=""
          src="../rectangle-870@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "580px",
          left: "50px",
          borderRadius: "4px",
          backgroundColor: "#f1f1f1",
          width: "1340px",
          height: "660px",
          overflow: "hidden",
          textAlign: "justify",
          fontSize: "16px",
          color: "#000",
          fontFamily: "'Open Sans'",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50px",
            fontSize: "24px",
            letterSpacing: "0.08em",
            lineHeight: "30px",
            fontWeight: "600",
            color: "#da9532",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            width: "294px",
            height: "17px",
          }}
        >
          Join Us as a Volunteer
        </div>
        <TextField
          style={{ position: "absolute", top: "97px", left: "50px" }}
          sx={{ width: 400 }}
          color="primary"
          variant="outlined"
          defaultValue="Name"
          multiline
          label="Name"
          placeholder="Textarea placeholder"
          margin="none"
        />
        <TextField
          style={{ position: "absolute", top: "182px", left: "50px" }}
          sx={{ width: 400 }}
          color="primary"
          variant="outlined"
          defaultValue="Name"
          multiline
          label="Email"
          placeholder="Textarea placeholder"
          margin="none"
        />
        <TextField
          style={{ position: "absolute", top: "267px", left: "50px" }}
          sx={{ width: 400 }}
          color="primary"
          variant="outlined"
          defaultValue="Name"
          multiline
          label="Mobile"
          placeholder="Textarea placeholder"
          margin="none"
        />
        <TextField
          style={{ position: "absolute", top: "352px", left: "50px" }}
          sx={{ width: 400 }}
          color="primary"
          variant="outlined"
          multiline
          label="Address"
          placeholder="Textarea placeholder"
          margin="none"
        />
        <Button
          style={{ position: "absolute", top: "472px", left: "50px" }}
          sx={{ width: 400 }}
          variant="outlined"
          color="primary"
        >
          Submit
        </Button>
        <div
          style={{
            position: "absolute",
            top: "75px",
            left: "572px",
            letterSpacing: "0.1em",
            lineHeight: "40px",
            display: "flex",
            alignItems: "center",
            width: "700px",
          }}
        >
          The Foundation is able to carry out its work thanks to the
          contribution of numerous volunteers. These volunteers, who come from
          various countries, include project managers, writers, designers,
          editors, proofreaders, translators, and communications experts. They
          generously offer their time and expertise to support the Foundation's
          mission, while a small team of staff members coordinates their
          efforts. When specific roles become available, we post their
          descriptions on our website. We welcome anyone who is interested in
          these roles to request further information.
        </div>
        <div
          style={{
            position: "absolute",
            top: "398px",
            left: "568px",
            letterSpacing: "0.1em",
            lineHeight: "40px",
            display: "flex",
            alignItems: "center",
            width: "700px",
          }}
        >
          {" "}
          To learn more about a specific volunteer position, please click on the
          corresponding role listed below. If you have any questions, please
          don't hesitate to reach out to us at rvkender@rvk.in, or through our
          contact page. Simply select "Volunteer Opportunities" on the form to
          direct your inquiry. Additionally, if you have any ideas for how you'd
          like to get involved or partner with us, we would love to hear from
          you.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "1430px",
          width: "10px",
          height: "924px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "2px",
            borderRadius: "5px",
            backgroundColor: "#8e8e8e",
            border: "1px solid #8e8e8e",
            boxSizing: "border-box",
            width: "6px",
            height: "60px",
          }}
        />
      </div>
    </div>
  );
};

export default GETInvolvedVolunteer;
