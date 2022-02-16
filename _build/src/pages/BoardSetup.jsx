import * as React from 'react';
import { RuleSection } from './RuleComponents';

export default () => (
  <div className='container'>
    <h2>Board Setup</h2>
    <p>This section describes how to set up a game using all of the advanced rules. Note that some of these steps vary slightly from the “First-Game Setup” rules.</p>

    <RuleSection title='Step 1 — Determine Speaker'>
      <p>Randomly determine one player to gain the speaker token; that player is the speaker.</p>
    </RuleSection>

    <RuleSection title='Step 2 — Choose Factions'>
      <p>Each player chooses one faction sheet; this is their faction for the game. Each player places their faction sheet in their play area.</p>
    </RuleSection>

    <RuleSection title='Step 3 — Gather Faction Components'>
      <p>Each player takes the following components that have their faction’s icon:</p>
      <ul>
        <li>1 home system tile</li>
        <li>17 control tokens</li>
        <li>16 command tokens</li>
        <li>1 faction promissory note</li>
        <li>2 faction technology cards</li>
        <li>3 leader cards</li>
        <li>1 mech unit card</li>
        <li>additional factionspecific components<sup>*</sup></li>
      </ul>
      <p>Each player places each of their faction components near their faction sheet. Players return all unused faction components to the game box.</p>
      <p><sup>*</sup>NOTE: Only the Naalu Collective, the Nekro Virus, the Ghosts of Creuss, the Embers of Muaat, the Vuil’raith Cabal, the Nomad, the Empyrean, and the Titans of Ul have additional faction-specific components.</p>
    </RuleSection>

    <RuleSection title='Step 4 — Choose Color'>
      <p>Each player chooses one color and takes the following components that correspond to that color.</p>
      <ul>
        <li>63 plastic units</li>
        <li>1 command sheet</li>
        <li>1 leader sheet</li>
        <li>33 technology cards</li>
        <li>5 promissory notes</li>
      </ul>
      <p>Each player combines their color-specific and faction technology cards into one technology deck and their color-specific and faction promissory note cards into one promissory note deck. Then, each player places their decks in their play area along with their command sheet and plastic units.</p>
      <p>Then, each player places their leader sheet in their play area. They then place their agent, commander, and hero leader cards as well as their mech unit card in the corresponding slots. All leaders are placed showing the side that has the slot icon in the upper-right corner.</p>
    </RuleSection>

    <RuleSection title='Step 5 — Distribute Starting Planet Cards'>
      <p>Each player takes the planet cards that correspond to the planets in their home system and places those cards faceup in their play area.</p>
    </RuleSection>

    <RuleSection title='Step 6 — Create Game Board'>
      <p>Place the Mecatol Rex system tile in the center of the common play area—this is the center of the galaxy. The galaxy will consist of either three or four rings around Mecatol Rex. Each player’s home systems will be in a set position in the third ring. Use the “Game Board Setup” diagram to estimate where players’ home systems will be placed based on each player’s position around the game area.</p>
      <p>Next, if the desired game board setup uses hyperlane tiles, gather the following hyperlane tiles and place them exactly as shown in corresponding diagram on page 6:</p>
      <ul>
        <li>FIVE-PLAYER (HYPERLANES): 83A, 84A, 85A, 86A, 87A, and 88A.</li>
        <li>SEVEN-PLAYER: 83A, 84A, 85A, 86A, 87A, and 88A.</li>
        <li>SEVEN-PLAYER (ALTERNATE): 83B, 84B, 85B, 86B, 88B, and 90B.</li>
        <li>EIGHT-PLAYER (ALTERNATE): 83B, 85B, 87A, 88A, 89B, and 90B. </li>
      </ul>
      <p>Place the wormhole nexus in the common play area so the side that shows only the gamma wormhole is faceup. Place the 3 gamma wormhole tokens next to the wormhole nexus.</p>
      <p>Then, create the rest of game board following these steps:</p>
      <ol>
        <li>SEPARATE SYSTEMS: Separate the system tiles into two piles using the color on the back of each tile: one pile of blue-backed system tiles and one pile of red-backed system tiles. Green-backed system tiles are home systems and are not separated into piles in this way.</li>
        <li>DEAL SYSTEM TILES: Shuffle each pile of system tiles facedown. Then, deal facedown system tiles to each player according to player count and desired game board setup:</li>
        <ul>
          <li>THREE-PLAYER: Six blue and two red tiles are dealt to each player.</li>
          <li>FOUR-PLAYER: Five blue and three red tiles are dealt to each player.</li>
          <li>FIVE-PLAYER (NO HYPERLANES): Four blue and two red tiles are dealt to each player.</li>
          <li>FIVE-PLAYER (HYPERLANES): Three blue and two red tiles are dealt to each player.</li>
          <li>SIX-PLAYER: Three blue and two red tiles are dealt to each player.</li>
          <li>SIX-PLAYER (LARGE GALAXY): Six blue and three red tiles are dealt to each player.</li>
          <li>SEVEN-PLAYER: Four blue and two red tiles are dealt to each player.</li>
          <li>SEVEN-PLAYER (ALTERNATE): Three blue and two red tiles are dealt to each player.</li>
          <li>EIGHT-PLAYER: Four blue and two red tiles are dealt to each player.</li>
          <li>EIGHT-PLAYER (ALTERNATE): Three blue and two red tiles are dealt to each player.</li>
          <li>NOTE: For some player counts and game board setups, additional system tiles are required. Before placing system tiles for the following setups, the speaker draws additional system tiles and places them faceup in any space adjacent to Mecatol Rex:</li>
          <li>FIVE-PLAYER (NO HYPERLANES): The speaker places one red tile.</li>
          <li>SEVEN-PLAYER: The speaker places two red and three blue tiles.</li>
          <li>EIGHT-PLAYER: The speaker places two red and two blue tiles.</li>
        </ul>
        <li>PLACE SYSTEM TILES: First, players place their home systems in the approximate positions where they will connect to the galaxy. Then, starting with the speaker and proceeding clockwise, each player places one system tile faceup in the first ring around Mecatol Rex. After the last player has placed their first tile, they place a second tile. Then, the order of tile placement reverses and proceeds counterclockwise, until it reaches the speaker again, who places two tiles. Then, tile placement reverses again and proceeds clockwise. This process repeats until players have placed all of their tiles.
        <br /><br />
          Each ring around Mecatol Rex must be fully built before any tile can be placed in the next ring. Anomaly system tiles <strong>cannot</strong> be placed next to one another unless there is no other option. Additionally, system tiles that contain the same type of wormhole <strong>cannot</strong> be placed next to one another unless there is no other option. After placing all of the dealt system tiles, players attach their home systems to the rest of the galaxy.
        <br /><br />
          NOTE: During a five-player game that does not use hyperlanes, three players will be at a slight disadvantage based on their home systems’ starting positions on the game board. After creating the game board, those players receive trade goods based on their positions. Use the diagram to the right to determine how many trade goods each of those players receives.</li>
      </ol>
    </RuleSection>

    <RuleSection title='Step 7 — PLACE GAME BOARD TOKENS'>
      <p>Place the custodians token in the center of the game board on Mecatol Rex.</p>
      <p>Then, place one frontier token on each system that has no planets. Return the remaining frontier tokens to the game box. Place all attachment tokens near the game board.</p>
    </RuleSection>

    <RuleSection title='Step 8 — Shuffle Common Decks'>
      <p>Shuffle the action card, agenda, stage I objective, stage II objective, and secret objective decks separately and place them in the common play area.</p>
      <p>Shuffle the relic deck and each exploration deck separately and place them in the common play area.</p>
    </RuleSection>

    <RuleSection title='Step 9 — Create Supply'>
      <p>Gather and create separate piles in the common play area for trade good tokens, fighter tokens, and infantry tokens.</p>
      <p>Place the planet cards and legendary planet ability cards near the game board.</p>
    </RuleSection>

    <RuleSection title='Step 10 — Gather Strategy Cards'>
      <p>Place each of the eight strategy cards faceup in the common play area within reach of the speaker.</p>
    </RuleSection>

    <RuleSection title='Step 11 — Gather Starting Components'>
      <p>Each player gains the starting technologies and starting units listed on the back of their faction sheet. Each player places the technology cards faceup near their faction sheet and the starting units in their home system. </p>
      <p>Each player places three command tokens in their tactic pool, three command tokens in their fleet pool, and two command tokens in their strategy pool.</p>
    </RuleSection>
   
    <RuleSection title='Step 12 — Prepare Objectives'>
      <p>Prepare objectives as follows:</p>
      <ol>
        <li>Each player draws two secret objectives and chooses one to keep. Shuffle the unchosen secret objectives back into the secret objective deck without revealing them.</li>
        <li>Place the victory point track near the game board. As a group, players decide whether to play with the 10- or 14-space side of the victory point track faceup. Each player places one of their control tokens on the “0” space of the track.</li>
        <li>The speaker deals five facedown stage I objectives and places them in a row below the victory point track. Then, the speaker deals five facedown stage II objectives and places them in a row below the stage I objectives.</li>
        <li>The speaker reveals the first two stage I objectives.</li>
      </ol>
    </RuleSection>
  </div>
);