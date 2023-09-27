import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form>
      <Button type="primary">Make priorty</Button>;
    </fetcher.Form>
  );
}
export default UpdateOrder;
