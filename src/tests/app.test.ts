import app from "../index";
import request from "supertest";


describe("API endpoint /new", () => {
    it("should return state marshalled json object", async () => {
      const res = await request(app)
        .get("/new?w=22&h=40")
        .expect("Content-Type", /json/);
      expect(res.status).toEqual(200);
    });
  
    // GET - Invalid path
    it("should return Not Found", async () => {
      const res = await request(app).get("/INVALID_PATH");
      expect(res.status).toEqual(404);
    });


    it('should return status code 400 due to missing height/width query parameter', async () => {
        const res = await request(app)
        .get("/new?w=22")
        expect(res.status).toEqual(400);
    });

  });