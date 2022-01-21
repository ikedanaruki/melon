import { Entity, game } from "melonjs/dist/melonjs.module.js";
import * as me from "melonjs/dist/melonjs.module.js";
game.resources = [{ name: "player", type: "image", src: "data/img/bear.png" }];

class PlayerEntity extends Entity {
  static image = me.loader.getImage("player");
  /**
   * constructor
   */
  constructor(x, y, settings) {
    // call the parent constructor
    super(x, y, [
      game.viewport.width / 2 - PlayerEntity.image.width / 2,
      game.viewport.height - PlayerEntity.image.height - 20,
      { image: PlayerEntity.image }
    ]);
  }

  /**
   * update the entity
   */
  update(dt) {
    // change body force based on inputs
    //....
    // call the parent method
    return super.update(dt);
  }

  /**
   * colision handler
   * (called when colliding with other objects)
   */
  onCollision(response, other) {
    // Make all other objects solid
    return true;
  }
}

export default PlayerEntity;
