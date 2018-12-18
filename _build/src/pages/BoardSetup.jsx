import * as React from 'react';
import { RuleSection } from './RuleComponents';

export default () => (
  <div className='container'>
    <h2>Board Setup</h2>
    <p>This section describes how to set up a game using all of the advanced rules. Note that some of these steps vary slightly from the “First-Game Setup” rules.</p>

    <RuleSection title='Step 1 — Determine Speaker'>
      <p>Randomly determine one player to gain the speaker token; he is the speaker.</p>
    </RuleSection>

    <RuleSection title='Step 2 — Choose Factions'>
      <p>Each player chooses one faction sheet; this is his faction for the game.</p>
    </RuleSection>

    <RuleSection title='Step 3 — Gather Faction Components'>
      <p>Each player takes the following components that match his faction. Each player places his faction sheet and all of his faction’s components in his play area. Players return all unused faction components to the game box: 1 home system tile, 17 control tokens, 16 command tokens, 1 faction promissory note, 2 faction technology cards, any faction-specific tokens</p>
      <p>NOTE: Only the Naalu Collective, the Nekro Virus, and the Ghosts of Creuss have faction-specific tokens.</p>
    </RuleSection>

    <RuleSection title='Step 4 — Choose Color'>
      <p>Each player chooses one color and takes the following components corresponding to that color. Each player places his plastic units and command sheet in his play area. 59 plastic units, 25 technology cards, 1 command sheet, 4 promissory notes</p>
      <p>Each player combines his color-specific and faction technology cards into one technology deck and his color-specific and faction promissory note cards into one promissory note deck. Then, he places these decks in his play area.</p>
    </RuleSection>

    <RuleSection title='Step 5 — Distribute Starting Planet Cards'>
      <p>Each player takes the planet cards that correspond to the planets in his home system and places them faceup in his play area.</p>
    </RuleSection>

    <RuleSection title='Step 6 — Create Game Board'>
      <p>Place the Mecatol Rex system tile in the center of the common play area—this is the center of the galaxy. The galaxy will consist of three rings around Mecatol Rex. Each player’s home systems will be in a set position in the third ring. Use the “Game Board Setup” diagram to estimate where players’ home systems will be placed based on each player’s position around the game area. Then, create the game board following these steps:</p>

      <ol>
        <li>SEPARATE SYSTEMS: Separate the system tiles into two piles using the color on the back of each tile: one pile of blue-backed system tiles and one pile of red-backed system tiles. Green-backed system tiles are home systems and are not separated into piles in this way.</li>
        <li>DEAL SYSTEM TILES: Shuffle each pile of system tiles facedown. Then, deal facedown system tiles to each player according to player count:</li>
        <ol>
          <li>THREE-PLAYER: Six blue and two red tiles are dealt to each player.</li>
          <li>FOUR-PLAYER: Five blue and three red tiles are dealt to each player.</li>
          <li>FIVE-PLAYER: Four blue and two red tiles are dealt to each player.</li>
          <li>SIX-PLAYER: Three blue and two red tiles are dealt to each player.</li>
          <li>NOTE: For a five-player game, one additional system tile will be needed. Before placing system tiles, the speaker draws one random red-backed system tile and places it faceup in any space adjacent to Mecatol Rex.</li>
        </ol>
        <li>PLACE SYSTEM TILES: First, players place their home systems in the approximate positions where they will connect to the galaxy. Then, starting with the speaker and proceeding clockwise, each player places one system tile faceup in the first ring around Mecatol Rex. After the last player has placed his first tile, he places a second tile. Then, the order of tile placement reverses and proceeds counterclockwise, until it reaches the speaker again, who places two tiles. Then, tile placement reverses again and proceeds clockwise. This process repeats until players have placed all of their tiles.
        <br /><br />
          Each ring around Mecatol Rex must be fully built before any tile can be placed in the next ring. Anomaly system tiles cannot be placed next to one another unless there is no other option. Additionally, system tiles that contain the same type of wormhole cannot be placed next to one another unless there is no other option. After placing all of the dealt system tiles, players attach their home systems to the rest of the galaxy.
        <br /><br />
          NOTE: During a five-player game, three players will be at a slight disadvantage based on their home systems’ starting positions on the game board. After creating the game board, those players receive trade goods based on their positions. Use the diagram to the right to determine how many trade goods each of those players receives.</li>
      </ol>
    </RuleSection>

    <RuleSection title='Step 7 — Place Custodians Token'>
      <p>Place the custodians token in the center of the game board on Mecatol Rex.</p>
    </RuleSection>

    <RuleSection title='Step 8 — Shuffle Common Decks'>
      <p>Shuffle the action card, agenda, stage I objective, stage II objective, and secret objective decks separately and place them in the common play area.</p>
    </RuleSection>

    <RuleSection title='Step 9 — Create Supply'>
    <p>Gather and create separate piles in the common play area for trade good tokens, fighter tokens, and infantry tokens.</p>
    </RuleSection>

    <RuleSection title='Step 10 — Gather Strategy Cards'>
    <p>Place each of the eight strategy cards faceup in the common play area within reach of the speaker.</p>
    </RuleSection>

    <RuleSection title='Step 11 — Gather Starting Components'>
    <p>Each player gains the starting technologies and starting units listed on the back of his faction sheet. Each player places the technology cards faceup near his faction sheet and the starting units in his home system.</p>

    <p>Each player places three command tokens in his tactic pool, three command tokens in his fleet pool, and two command tokens in his strategy pool.</p>
    </RuleSection>

    <RuleSection title='Step 12 — Prepare Objectives'>
      <p>Prepare objectives as follows:</p>
      <ol>
        <li>Each player draws two secret objectives and chooses one to keep. Shuffle the unchosen secret objectives back into the secret objective deck without revealing them.</li>
        <li>Place the victory point track near the game board. As a group, players decide whether to play with the 10- or 14-space side of the victory point track faceup. Each player places one of his control tokens on the “0” space of the track.</li>
        <li>The speaker deals five facedown stage I objectives and places them in a row below the victory point track. Then, he deals five facedown stage II objectives and places them in a row below the stage I objectives.</li>
        <li>The speaker reveals the first two stage I objectives.</li>
      </ol>
    </RuleSection>
  </div>
);