import renderer from "react-test-renderer";
import Detail from "../components/detail"

describe("Details component", () => {
    test("smoke", () => {
        const snap = renderer.create(
            <Detail />
            ).toJSON();
            expect(snap).toMatchSnapshot();
        })
})