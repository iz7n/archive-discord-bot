import db, { inArray } from "../database";
import { messages } from "../drizzle/schema";
import event from "../event";

export default event({ name: "messageDeleteBulk" }, async ({ args: [col] }) => {
  await db.delete(messages).where(inArray(messages.id, [...col.keys()]));
});