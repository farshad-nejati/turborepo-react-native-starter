import { Button } from "ui";
import { Button as ButtonWeb } from "uiweb";
export default function Web() {
  return (
    <div>
      <h1>Hi Web</h1>

      <Button onClick={() => alert("Pressed!")} text="native button" />
      <ButtonWeb onClick={() => alert('booom')}> Web ButtonWeb</ButtonWeb>
    </div>
  );
}
