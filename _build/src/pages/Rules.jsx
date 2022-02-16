import * as React from 'react';
import { RuleSection, RuleText, RuleImageBlock } from './RuleComponents';
import SearchFilter from './SearchFilter';

export default ({ search }) => (
  <SearchFilter search={search}>
    <RuleSection title='Golden Rules'>
      <RuleText>
        The golden rules are fundamental game concepts on which all other game rules are built.
        <ul>
          <li>If information in this Rules Reference contradicts the Learn to Play booklet, the Rules Reference takes precedence.</li>
          <li>If a card ability contradicts information in the Rules Reference, the card takes precedence. If both the card and the rules can be followed at the same time, they should be.</li>
          <li>If a card or faction ability uses the word “cannot,” it is absolute and cannot be overridden by other abilities.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection title='Timing'>
      <RuleText>During the action phase, if there are multiple abilities that players wish to resolve at the same time, each player takes a turn resolving an ability in initiative order, beginning with the active player. This process continues until each player has resolved all the abilities that he wishes to resolve during that timing window.</RuleText>
      <RuleText>During the strategy and agenda phases, if there are multiple abilities that players wish to resolve at the same time, each player takes a turn resolving an ability starting with the speaker and proceeding clockwise. This process continues until each player has resolved all the abilities that he wishes to resolve during that timing window. For more information about timing and ability resolution, see “Abilities” on page 6.</RuleText>
    </RuleSection>

    <RuleSection
      number='1'
      title='Abilities'
      related={['Action Cards', 'Promissory Notes', 'Strategy Card', 'Technology']}>
      <RuleText>Cards and faction sheets each have abilities that players can resolve to trigger various game effects.</RuleText>

      <RuleText number='1.1'>Each ability describes when and how a player can resolve it.
        <ul>
          <li>If an ability with a specified duration is resolved, the effect of the ability remains through that duration, even if the component that caused the ability is removed.</li>
        </ul>
      </RuleText>
      <RuleText number='1.2'>If a card has multiple abilities, each ability is presented as its own paragraph.</RuleText>
      <RuleText number='1.3'>If an ability contains the word “Action,” a player must use a component action during the action phase to resolve that ability.</RuleText>
      <RuleText number='1.4'>If an ability uses the word “cannot,” that effect is absolute.</RuleText>
      <RuleText number='1.5'>When a player resolves an ability, he must resolve the ability in its entirety. Any parts of the ability preceded by the word “may” are optional, and the player resolving the ability may choose not to resolve those parts.</RuleText>
      <RuleText number='1.6'>Abilities on components that remain in play are mandatory unless they use the word "may."</RuleText>
      <RuleText number='1.7'>If an ability has multiple effects separated by the word “and,” a player must resolve as many of the ability’s effects as possible. However, if he cannot resolve all of its effects, he is allowed to resolve as many as he can.</RuleText>
      <RuleText number='1.8' subheading='Costs' />
      <RuleText number='1.9'>Some abilities have a cost that is followed by an effect. The cost of an ability is separated from the effect by the word “to” or by a semicolon. A player cannot resolve the effect of such an ability if he cannot resolve that ability’s cost.</RuleText>
      <RuleText number='1.10'>Some examples of an ability’s cost include spending resources, spending trade goods, spending command tokens, exhausting cards, and activating specific systems.</RuleText>
      <RuleText number='1.11' subheading='Timing' />
      <RuleText number='1.12'>If the timing of an ability uses the word “before” or “after,” the ability’s effect occurs immediately before or after the described timing event, respectively.
        <ul>
          <li>For example, if an ability is resolved “after a ship is destroyed,” the ability must be resolved as soon as the ship is destroyed and not later during that turn or round.</li>
          <li>After the last round of a combat, abilities that occur “after a round of combat” and “after combat ends” occur during the same timing window. Likewise, at the start of the first round of combat, abilities that occur “at the start of combat” and “at the start of a round of combat” occur during the same timing window. The order of resolution for these abilities follows the rules established in the timing section.</li>
        </ul>
      </RuleText>
      <RuleText number='1.13'>If the timing of an ability uses the word “when,” the ability’s effect occurs at the moment of the described timing event.
        <ul>
          <li>Such an ability typically modifies or replaces the timing event in some way.</li>
        </ul>
      </RuleText>
      <RuleText number='1.14'>Effects that occur “when” an event happens take priority over effects that occur “after” an event happens.</RuleText>
      <RuleText number='1.15'>If an ability uses the word “then,” a player must resolve the effect that occurs before the word “then” or he cannot resolve the effect that occurs after the word “then.”</RuleText>
      <RuleText number='1.16'>Each ability can be resolved once for each occurrence of that ability’s timing event. For example, if an ability is resolved “At the start of combat,” it can be resolved at the start of each combat.</RuleText>
      <RuleText number='1.17' subheading='Component-Specific Rules' />
      <RuleText number='1.18'>The opening paragraph of each ability found on an action card describes when a player can resolve that card’s ability.</RuleText>
      <RuleText number='1.19'>The opening paragraph of most abilities found on promissory notes describes when a player can resolve that card’s ability.
      <ul>
          <li>Some promissory notes have abilities that trigger as soon as a player receives the card.</li>
        </ul>
      </RuleText>
      <RuleText number='1.20'>Abilities on agenda cards correspond to an outcome. Players resolve these abilities during the agenda phase after players vote for a particular outcome.</RuleText>
      <RuleText number='1.21'>Each faction has faction abilities presented on its faction sheet. Each faction’s flagship has one or more unique abilities. Some abilities provide players with perpetual effects.</RuleText>
      <RuleText number='1.22'>Some units have unit abilities. These abilities are named and presented above a unit’s attributes on a player’s faction sheet or on a unit upgrade card. Each unit ability has unique rules for when a player can resolve that ability. The following abilities are unit abilities:
      <ul>
          <li>Anti-Fighter Barrage</li>
          <li>Bombardment</li>
          <li>Planetary Shield</li>
          <li>Production</li>
          <li>Space Cannon</li>
          <li>Sustain Damage</li>
        </ul>
      </RuleText>
      <RuleText number='1.23'>If a unit’s ability uses the phrase “this system” or “this planet,” the ability is referring to the system or planet that contains that unit.</RuleText>
    </RuleSection>

    <RuleSection
      number='2'
      title='Action Cards'
      related={['Abilities', 'Component Action', 'Politics', 'Status Phase']}>
      <RuleText>Action cards provide players with various abilities that they can resolve as described on the cards.</RuleText>
      <RuleText number='2.1'>Each player draws one action card during each status phase.</RuleText>
      <RuleText number='2.2'>Players can draw action cards by resolving the primary and
secondary abilities of the “Politics” strategy card.</RuleText>
      <RuleText number='2.3'>When a player draws an action card, he takes the top card from the action card deck and adds it to his hand of action cards.</RuleText>
      <RuleText number='2.4'>Each player can have a maximum of seven action cards in his hand at any time. If a player ever has more than seven action cards, he must choose which seven cards he wishes to keep and discard the rest.
        <ul>
          <li>A game effect can increase or decrease the number of cards a player can have in his hand.</li>
        </ul>
      </RuleText>
      <RuleText number='2.5'>A player’s action cards remain hidden from other players until they are played.</RuleText>
      <RuleText number='2.6'>The first paragraph of each action card is presented in bold text and describes the timing of when that card’s ability can be resolved.
      <ul>
          <li>If an action card contains the word “Action,” a player must use a component action during the action phase to resolve the ability. A player cannot resolve a component action if he cannot completely resolve its ability.</li>
          <li>Multiple action cards with the same name cannot be played during a single timing window to affect the same units or game effect. Canceled cards do not count as being played.</li>
        </ul>
      </RuleText>
      <RuleText number='2.7'>To play an action card, a player reads and resolves the card’s ability text, making any decisions as prompted by the card. Then, he discards the card, placing it in the action discard pile.</RuleText>
      <RuleText number='2.8'>If an action card is canceled, that card has no effect and is discarded.</RuleText>
      <RuleText number='2.9'>During the action phase, if two or more action cards or other abilities would be resolved during the same timing window, players should use the timing rules on page 4 to determine the correct order of resolution.</RuleText>
      <RuleText number='2.10'>During the strategy and agenda phases, if two or more action cards or other abilities would be resolved during the same timing window, players should use the timing rules on page 4 to determine the correct order of resolution.</RuleText>
    </RuleSection>

    <RuleSection
      number='3'
      title='Action Phase'
      related={['Component Action', 'Game Round', 'Status Phase', 'Strategic Action', 'Tactical Action']}>

      <RuleText>During the action phase, each player takes a turn in initiative order. During a player’s turn, he performs a single action. After each player has taken a turn, player turns begin again in initiative order. This process continues until all players have passed.</RuleText>

      <RuleText number='3.1'>During a player’s turn, he may perform one of the following three types of actions: a strategic action, a tactical action, or a component action.</RuleText>

      <RuleText number='3.2'>If a player cannot perform an action, he must pass.</RuleText>

      <RuleText number='3.3'>After a player has passed, he takes no further turns and cannot perform additional actions during that action phase.
        <ul>
          <li>A player can still resolve transactions and “at the start of your turn” abilities on the turn that he passes only.</li>
          <li>A player that has passed can still resolve the secondary ability of other players’ strategy cards.</li>
          <li>It is possible for a player to perform multiple, consecutive actions during an action phase if all other players have passed during that action phase.</li>
        </ul>
      </RuleText>

      <RuleText number='3.4'>A player cannot pass until he has performed a strategic action.
        <ul>
          <li>During a three-player or four-player game, a player cannot pass until he has exhausted both of his strategy cards.</li>
        </ul>
      </RuleText>

      <RuleText number='3.5'>After all players have passed, play proceeds to the status phase.</RuleText>

    </RuleSection>

    <RuleSection
      number='4'
      title='Active Player'
      related={['Action Phase', 'Initiative Order']}>
      <RuleText>The active player is the player taking a turn during the action phase.</RuleText>
      <RuleText number='4.1'>During the action phase, the player who is first in initiative order is the first active player.</RuleText>
      <RuleText number='4.2'>After the active player takes a turn, the next player in initiative order becomes the active player.</RuleText>
      <RuleText number='4.3'>After the last player in initiative order takes a turn, the player who is first in initiative order becomes the active player again, and turns begin again in initiative order, ignoring any players who have already passed.</RuleText>
    </RuleSection>

    <RuleSection
      number='5'
      title='Active System'
      related={['Movement', 'Tactical Action']}>
      <RuleText>The active system is the system that is activated during a tactical action.</RuleText>
      <RuleText number='5.1'>When a player performs a tactical action, he activates a system by placing a command token from his tactic pool on that system. That system is the active system.</RuleText>
      <RuleText number='5.2'>A player cannot activate a system that already contains one of his command tokens.</RuleText>
      <RuleText number='5.3'>A player can activate a system that contains command tokens that match other players’ factions.</RuleText>
      <RuleText number='5.4'>A system remains the active system for the duration of the tactical action during which it was activated.</RuleText>
    </RuleSection>

    <RuleSection
      number='6'
      title='Adjacency'
      related={['Movement', 'Neighbors', 'Wormholes']}>
      <RuleText>Two system tiles are adjacent to each other if any of the tiles’ edges are touching each another.</RuleText>
      <RuleText number='6.1'>A system that has a wormhole is treated as being adjacent to a system that has a matching wormhole.</RuleText>
      <RuleText number='6.2'>A unit or planet is adjacent to all system tiles that are adjacent to the system tile that contains that unit or planet.
        <ul>
          <li>A system is not adjacent to itself.</li>
        </ul>
      </RuleText>
      <RuleText number='6.3'>A planet counts as being adjacent to the system that contains that planet.</RuleText>
    </RuleSection>

    <RuleSection
      number='7'
      title='Agenda Card'
      related={['Agenda Phase', 'Attach', 'Victory Point']}>
      <RuleText>Agenda cards represent galactic laws and policies. During each agenda phase, players cast votes for specific outcomes on two agenda cards.</RuleText>
      <RuleText number='7.1'>There are two types of agenda cards: laws and directives.</RuleText>
      <RuleText number='7.2'>Laws can permanently change the rules of the game.</RuleText>
      <RuleText number='7.3'>When resolving a law, if a “For” outcome received the most votes, or if the law requires an election, the law’s ability becomes a permanent part of the game. Players resolve the outcome and place the agenda card either in the common play area or in a player’s play area, as dictated by the card.</RuleText>
      <RuleText number='7.4'>If a law is in a player’s play area as opposed to the common play area, that player owns that law.</RuleText>
      <RuleText number='7.5'>If a law is discarded from play, that law’s ability is no longer in effect. Place that card on the top of the agenda card discard pile.</RuleText>
      <RuleText number='7.6'>If an “Against” outcome of a law received the most votes, players resolve the outcome and discard the agenda.</RuleText>
      <RuleText number='7.7'>Directives provide one-time game effects.</RuleText>
      <RuleText number='7.8'>When resolving a directive, players resolve the outcome that received the most votes and discard the agenda card.</RuleText>
    </RuleSection>

    <RuleSection
      number='8'
      title='Agenda Phase'
      related={['Custodians Token', 'Game Round', 'Influence']}>
      <RuleText>During the agenda phase, players can cast votes on agendas that can change the rules of the game.</RuleText>
      <RuleText number='8.1'>Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round. To resolve the agenda phase, players perform the following steps:</RuleText>
      <RuleText number='8.2'>STEP 1—FIRST AGENDA: Players resolve the first agenda by following these steps in order:
        <ol type='i'>
          <li>REVEAL AGENDA: The speaker draws one agenda card from the top of the agenda deck and reads it aloud to all players, including all of its possible outcomes.</li>
          <li>VOTE: Each player, starting with the player to the left of the speaker and continuing clockwise, can cast votes for an outcome of the current agenda.</li>
          <li>RESOLVE OUTCOME: Players tally each vote that was cast and resolve the outcome that received the most votes.</li>
        </ol>
      </RuleText>
      <RuleText number='8.3'>STEP 2—SECOND AGENDA: Players repeat the “First Agenda” step of this phase for a second agenda.</RuleText>
      <RuleText number='8.4'>STEP 3—READY PLANETS: Each player readies each of his exhausted planets. Then, a new game round begins starting with the strategy phase.</RuleText>
      <RuleText number='8.5' subheading='Voting'>When voting during the agenda phase, a player can cast votes for a specific outcome of an agenda.</RuleText>
      <RuleText number='8.6'>To cast votes, a player exhausts any number of his planets. The player casts a number of votes for an outcome of his choice equal to the combined influence values of the planets he exhausted.
        <ul>
          <li>When a player exhausts a planet to cast votes, he must cast the full amount of votes provided by that planet.</li>
        </ul>
      </RuleText>
      <RuleText number='8.7'>A player cannot cast votes for multiple outcomes of the same agenda. Each vote he casts must be for the same outcome.</RuleText>
      <RuleText number='8.8'>Some agendas have “For” and “Against” outcomes. When a player casts votes on such an agenda, he must cast his votes either “For” or “Against.”</RuleText>
      <RuleText number='8.9'>Some agendas instruct players to elect either a player or a planet. When a player casts votes for such an agenda, he must cast his vote for an eligible player or planet as described on the agenda.</RuleText>
      <RuleText number='8.10'>When electing a player, a player can cast votes for himself.
        <ul>
          <li>When resolving these agendas, the “elected player” is the player who had the most votes cast for him.</li>
        </ul>
      </RuleText>
      <RuleText number='8.11'>When electing a planet, a player must cast votes for a planet that is controlled by a player.
        <ul>
          <li>When resolving these agendas, the “elected planet” is the planet that had the most votes cast for it.</li>
        </ul>
      </RuleText>
      <RuleText number='8.12'>When casting votes, a player must declare aloud the outcome for which his votes are being cast.</RuleText>
      <RuleText number='8.13'>Trade goods cannot be spent to cast votes.</RuleText>
      <RuleText number='8.14'>A player may choose to abstain by not casting any votes.</RuleText>
      <RuleText number='8.15'>Some game effects allow a player to cast additional votes for an outcome. These votes cannot be cast for a different outcome than other votes cast by that player.</RuleText>
      <RuleText number='8.16'>If a player cannot vote on an agenda because of a game effect, he cannot cast votes for that agenda by exhausting planets or through any other game effect.</RuleText>
      <RuleText number='8.17' subheading='Outcomes' />
      <RuleText number='8.18'>To resolve an outcome, the speaker follows the instructions on the agenda card.</RuleText>
      <RuleText number='8.19'>If there is a tie for the outcome that received the most votes, or if no outcome receives any votes, the speaker decides which of the tied outcomes to resolve.
        <ul>
          <li>The speaker’s decision is not a vote.</li>
        </ul>
      </RuleText>
      <RuleText number='8.20'>If an “Elect” or “For” outcome of a law was resolved, that card remains in play and permanently affects the game.</RuleText>
      <RuleText number='8.21'>If a directive or an “against” outcome of a law was resolved, that card is placed in the agenda discard pile.</RuleText>
      <RuleText number='8.22'>Some game effects instruct a player to predict an outcome. To predict an outcome, a player declares aloud the outcome he thinks will receive the most votes. He must make this prediction after the agenda is revealed but before any votes have been cast.
        <ul>
          <li>A predicted outcome must be a possible outcome of the revealed agenda.</li>
          <li>After resolving the outcome of the agenda, resolve any abilities that were dependent upon predicting the outcome.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='9'
      title='Anomalies'
      related={['Asteroid Field', 'Gravity Rift', 'Movement', 'Nebula', 'Supernova', 'System Tiles']}>
      <RuleText>An anomaly is a system tile that has unique rules.</RuleText>
      <RuleText number='9.1'>An anomaly is identified by a red border located on the tile’s corners.</RuleText>
      <RuleText number='9.2'>There are four types of anomalies: asteroid fields, nebulae, supernovas, and gravity rifts.</RuleText>
      <RuleText number='9.3'>Each type of anomaly is identified by its art, as follows:
        <RuleImageBlock images={[
          { path: '/images/anomaly-asteroids.png', label: 'Asteroid Field' },
          { path: '/images/anomaly-nebula.png', label: 'Nebula' },
          { path: '/images/anomaly-supernova.png', label: 'Supernova' },
          { path: '/images/anomaly-rift.png', label: 'Gravity Rift' }
        ]} />
      </RuleText>
    </RuleSection>

    <RuleSection
      number='10'
      title='Anti-Fighter Barrage (Unit Ability)'
      related={['Destroyed', 'Space Combat']}>
      <RuleText>A unit with the “Anti-Fighter Barrage” ability may be able to destroy an opponent’s fighters at the onset of a battle. During the “Anti-Fighter Barrage” step of the first round of space combat, players perform the following steps:</RuleText>
      <RuleText number='10.1'>STEP 1—Each player rolls dice for each of his units in the combat that has the “Anti-Fighter Barrage” ability; this is called an anti-fighter barrage roll. A hit is produced for each die roll that is equal to or greater than the unit’s anti-fighter barrage value.
        <ul>
          <li>If a unit has an “Anti-Fighter Barrage” ability, it is presented on its faction sheet and technology cards.</li>
          <li>The “Anti-Fighter Barrage” ability is displayed as “Anti- Fighter Barrage X (Y).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled.</li>
          <li>Game effects that reroll, modify, or otherwise affect combat rolls do not affect anti-fighter barrage rolls</li>
        </ul>
      </RuleText>
      <RuleText number='10.2'>STEP 2:—Each player must choose and destroy one of his fighters in the active system for each hit his opponent’s anti- fighter barrage roll produced.
        <ul>
          <li>If a player has to assign more hits than he has fighters in the active system, the excess hits have no effect.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='11'
      title='Asteroid Field'
      related={['Anomalies']}>
      <RuleText>An asteroid field is an anomaly that affects movement.</RuleText>
      <RuleText number='11.1'>A ship cannot move through or into an asteroid field.</RuleText>
    </RuleSection>

    <RuleSection
      number='12'
      title='Attach'
      related={['Agenda Card', 'Control', 'Planets']}>
      <RuleText>Some game effects instruct a player to attach a card to a planet card. A card that is attached to a planet card modifies that planet card in some way.</RuleText>
      <RuleText number='12.1'>To attach a card to a planet card, a player places the card with the attach effect partially underneath the planet card.</RuleText>
      <RuleText number='12.2'>If a player gains or loses control of planet that contains a card with an attach effect, the attached card stays with that planet.
        <ul>
          <li>The attached card maintains its exhausted or readied state.</li>
        </ul>
      </RuleText>

    </RuleSection>

    <RuleSection
      number='13'
      title='Attacker'
      related={['Defender', 'Invasion', 'Space Combat']}>
      <RuleText>During combat, the active player is the attacker.</RuleText>
    </RuleSection>

    <RuleSection
      number='14'
      title='Blockaded'
      related={['Producing Units', 'Ships']}>
      <RuleText>A player’s unit with “Production” is blockaded if it is in a system that contains another player’s ships but does not contain any of his own ships.</RuleText>
      <RuleText number='14.1'>A player cannot use a blockaded unit to produce ships; he can still use a blockaded unit to produce ground forces.</RuleText>
    </RuleSection>

    <RuleSection
      number='15'
      title='Bombardment (Unit Ability)'
      related={['Invasion', 'Planetary Shield']}>
      <RuleText>A unit with the “Bombardment” ability may be able to destroy another player’s ground forces during an invasion. During the “Bombardment” step of an invasion, players perform the following steps:</RuleText>
      <RuleText number='15.1'>STEP 1— The active player chooses which planet each of his units that has a “Bombardment” ability will bombard. Then he rolls dice for each of those units; this is called a bombardment roll. A hit is produced for each die roll that is equal to or greater than the unit’s “Bombardment” value.
        <ul>
          <li>If a unit has a “Bombardment” ability, it is presented on its faction sheet and technology cards.</li>
          <li>The “Bombardment” ability is displayed as “Bombardment X (Y).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all “Bombardment” abilities have a (Y) value; a bombardment roll for such a unit consists of one die.</li>
          <li>Game effects that reroll, modify, or otherwise affect combat rolls do not affect bombardment rolls.</li>
          <li>Multiple planets in a system may be bombarded, but a player must declare which planet a unit is bombarding before making a bombardment roll.</li>
          <li>The L1Z1X’s “Harrow” ability does not affect the L1Z1X player’s own ground forces.</li>
          <li>Planets that contain a unit with the “Planetary Shield” ability cannot be bombarded.</li>
        </ul>
      </RuleText>
      <RuleText number='15.2'>STEP 2— The player who controls the planet that is being bombarded chooses and destroys one of his ground forces on that planet for each hit result the bombardment roll produced.
        <ul>
          <li>If a player has to assign more hits than he has ground forces, the excess hits have no effect.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='16'
      title='Capacity (Attribute)'
      related={['Movement', 'Capacity', 'Transport']}>
      <RuleText>Capacity is an attribute of some units that is presented on those units’ faction sheets and technology cards.</RuleText>
      <RuleText number='16.1'>A unit’s capacity value indicates the maximum combined number of fighters and ground forces that it can transport.</RuleText>
      <RuleText number='16.2'>The combined capacity values of a player’s ships in a system determine the number of fighters and ground forces he can have in that system’s space area.</RuleText>
      <RuleText number='16.3'>If a player has more fighters and ground forces in the space area of a system than the total capacity of his ships in that system, he must destroy the excess units of his choice.
        <ul>
          <li>Ground forces on planets do not count against capacity.</li>
          <li>A player’s fighters and ground forces do not count against capacity during combat. At the end of combat, he must destroy the excess units.</li>
        </ul>
      </RuleText>
      <RuleText number='16.4'>Fighters and ground forces are not assigned to specific ships, except while they are being transported.</RuleText>
    </RuleSection>

    <RuleSection
      number='17'
      title='Combat (Attribute)'
      related={['Ground Combat', 'Invasion', 'Space Combat']}>
      <RuleText>Combat is an attribute of some units that is presented on those units’ faction sheets and technology cards.</RuleText>
      <RuleText number='17.1'>During combat, if a unit’s combat roll produces a result equal to or greater than its combat value, it produces a hit.</RuleText>
      <RuleText number='17.2'>If a unit’s combat value contains two or more burst icons, instead of rolling a single die, the player rolls one die for each burst icon when making that unit’s combat rolls.</RuleText>
    </RuleSection>

    <RuleSection
      number='18'
      title='Command Sheet'
      related={['Command Tokens', 'Fleet Pool', 'Strategic Action', 'Tactical Action', 'Trade Goods']}>
      <RuleText>Each player has a command sheet that contains a strategy pool, a tactic pool, a fleet pool, a trade good area, and a quick reference.</RuleText>
      <RuleText number='18.1'>A player places command tokens in his pools; players can use these command tokens to perform strategic and tactical actions and to increase the number of ships they can have in each system.</RuleText>
      <RuleText number='18.2'>A player places trade good tokens in his trade good area; these tokens can be spent as resources, influence, or to resolve certain game effects that require trade goods.</RuleText>
      <RuleText number='18.3'>Players who are familiar with the game can hide the quick reference by placing that portion of the command sheet under their faction sheets.</RuleText>
    </RuleSection>

    <RuleSection
      number='19'
      title='Command Tokens'
      related={['Fleet Pool', 'Leadership', 'Reinforcements', 'Strategic Action', 'Tactical Action']}>
      <RuleText>Command tokens are a currency that players use to perform actions and expand their fleets.</RuleText>
      <RuleText number='19.1'>A player begins the game with eight command tokens on his command sheet: three in his tactic pool, three in his fleet pool, and two in his strategy pool.
        <ul>
          <li>Command tokens in the strategy and tactic pool are placed with the faction symbol faceup.</li>
          <li>Command tokens in the fleet pool are placed with the ship silhouette faceup.</li>
        </ul>
      </RuleText>
      <RuleText number='19.2'>When a player gains a command token, he chooses which of the three pools on his command sheet to place it in.</RuleText>
      <RuleText number='19.3'>A player is limited by the amount of command tokens in his reinforcements.
        <ul>
          <li>If he would gain a command token but has none available in his reinforcements, he cannot gain that command token.</li>
          <li>If a game effect would place a player’s command token onto the board from his reinforcements and none are available, he must take a token from one of the pools on his command sheet, unless the system already contains one of his command tokens.</li>
        </ul>
      </RuleText>
      <RuleText number='19.4'>During the action phase, a player can perform a tactical action by spending a command token from his tactic pool; he places the command token in a system.</RuleText>
      <RuleText number='19.5'>After a player performs a strategic action during the action phase, each other player can resolve the secondary ability of that strategy card by spending a command token from his own strategy pool.
        <ul>
          <li>A player does not spend a command token to resolve the secondary ability of the “Leadership” strategy card.</li>
        </ul>
      </RuleText>
      <RuleText number='19.6'>If a game effect would place a player’s command token into a system where he already has one, he returns the second command token to his reinforcements.</RuleText>
    </RuleSection>

    <RuleSection
      number='20'
      title='Commodities'
      related={['Deals', 'Trade Goods', 'Transactions']}>
      <RuleText>Commodities represent goods that are plentiful for their own faction and are desired by other factions. A commodity has no inherent game effects, but converts into a trade good if given to or received from another player.</RuleText>
      <RuleText number='20.1'>Commodities and trade goods are represented by opposite sides of the same token.</RuleText>
      <RuleText number='20.2'>The commodity value on a player’s faction sheet indicates the maximum number of commodities he can have.</RuleText>
      <RuleText number='20.3'>When an effect instructs a player to replenish commodities, he takes the number of commodity tokens necessary so that the amount of commodities he has equals the commodity value on his faction sheet. Then, he places those tokens so their commodity sides are faceup in the commodity area of his faction sheet.</RuleText>
      <RuleText number='20.4'>When a player replenishes commodities, he takes the commodity tokens from the supply.</RuleText>
      <RuleText number='20.5'>Players can trade commodities following the rules for transactions. When a player receives a commodity from another player, the player who received that token converts it into a trade good by placing it in the trade good area of his command sheet with the trade good side faceup.
        <ul>
          <li>That token is no longer a commodity token; it is a trade good token.</li>
          <li>A player can trade commodity tokens before resolving a game effect that allows him to replenish commodities.</li>
        </ul>
      </RuleText>
      <RuleText number='20.6'>Any game effect that instructs a player to give a commodity to another player causes that commodity to be converted into a trade good.</RuleText>
      <RuleText number='20.7'>A player cannot spend commodities; he can only trade them during a transaction.</RuleText>
      <RuleText number='20.8'>Commodity tokens come in values of one and three. A player can swap between these tokens as necessary.</RuleText>
    </RuleSection>

    <RuleSection
      number='21'
      title='Component Action'
      related={['Abilities', 'Action Cards', 'Action Phase', 'Technology']}>
      <RuleText>A component action is a type of action that a player can perform during his turn of an action phase.</RuleText>
      <RuleText number='21.1'>Component actions can be found on various game components, including action cards, technology cards, and faction sheets. Each component action is indicated by an “Action” header.</RuleText>
      <RuleText number='21.2'>To perform a component action, a player reads the action’s text and follows the instructions as described.</RuleText>
      <RuleText number='21.3'>A component action cannot be performed if its ability cannot be completely resolved.</RuleText>
      <RuleText number='21.4'>If a component action is canceled, it does not use that player’s action.</RuleText>
    </RuleSection>

    <RuleSection
      number='22'
      title='Component Limitations'
      related={['Producing Units', 'Units']}>
      <RuleText>If a component type is depleted during the game, players obey the following rules:</RuleText>
      <RuleText number='22.1'>DICE: Dice are limitless. If a player needs to roll more dice than the game provides, he should roll as many as possible, record the results, and then reroll dice as necessary.</RuleText>
      <RuleText number='22.2'>TOKENS: Tokens are limited to those included in the game, except for the following:
        <ul>
          <li>Control Tokens</li>
          <li>Fighter Tokens</li>
          <li>Trade Good Tokens</li>
          <li>Infantry Tokens</li>
        </ul>
      </RuleText>
      <RuleText number='22.3'>If any of the above tokens are depleted, players can use a suitable substitute, such as a coin or bead.</RuleText>
      <RuleText number='22.4'>UNITS: Units are limited to those included in the game, except for fighters and ground forces.
        <ul>
          <li>When placing units, if a player does not have enough units in his reinforcements, he can remove units from any systems that do not contain one of his command tokens and place them in his reinforcements. Then, he can place any units that he removed. He cannot remove units in this way unless he is immediately placing a unit of that type. Abilities cannot force a player to remove and place a unit in this manner.</li>
          <li>When producing a fighter or infantry unit, a player can use a fighter or infantry token, as appropriate, from the supply instead of a plastic piece. These tokens must be accompanied by at least one plastic piece of the same type; players can swap infantry and fighter tokens for plastic pieces at any time.</li>
        </ul>
      </RuleText>
      <RuleText number='22.5'>CARDS: When a deck is depleted, players shuffle the deck’s discard pile and place it facedown to create a new deck.</RuleText>
    </RuleSection>

    <RuleSection
      number='23'
      title='Construction (Strategy Card)'
      related={['Initiative Order', 'Strategic Action', 'Strategy Card', 'Structures']}>
      <RuleText>The “Construction” strategy card allows players to construct structures on planets they control. This card’s initiative value is “4.”</RuleText>
      <RuleText number='23.1'>During the action phase, if the active player has the “Construction” strategy card, he can perform a strategic action to resolve that card’s primary ability.</RuleText>
      <RuleText number='23.2'>To resolve the primary ability on the “Construction” strategy card, the active player may place either one PDS or one space dock on a planet he controls. Then, he may place an additional PDS on a planet he controls.
        <ul>
          <li>The structures can be placed on the same planet or different planets.</li>
          <li>The structures can be placed in any systems, regardless of whether the player has a command token in the system or not.</li>
        </ul>
      </RuleText>
      <RuleText number='23.3'>After the active player resolves the primary ability of the “Construction” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may place one command token from his strategy pool in any system. If he already has a command token in that system, the spent token is returned to his reinforcements instead. Then, he places either one PDS or one space dock on a planet he controls in that system.</RuleText>
      <RuleText number='23.4'>When a player places either a PDS or space dock using the “Construction” strategy card, he takes that PDS or space dock from his reinforcements.
        <ul>
          <li>If a player does not have enough units in his reinforcements, he can remove units from any systems that do not contain one of his command tokens and place them in his reinforcements. Then, he must place this unit on the game board as instructed by the effect placing the unit.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='24'
      title='Control'
      related={['Attach', 'Exhausted', 'Invasion', 'Planets']}>
      <RuleText>Each player begins the game with control of the planets in his home system. During the game, players can gain control of additional planets.</RuleText>
      <RuleText number='24.1'>When a player gains control of a planet, he takes the planet card that corresponds to that planet and places it in his play area; that card is exhausted.
        <ul>
          <li>If a player is the first player to control a planet, he takes the planet card from the planet card deck.</li>
          <li>If another player controls the planet, he takes that planet’s card from the other player’s play area.</li>
        </ul>
      </RuleText>
      <RuleText number='24.2'>A player cannot gain control of a planet that he already controls.</RuleText>
      <RuleText number='24.3'>While a player controls a planet, that planet’s card remains in his play area until he loses control of that planet.</RuleText>
      <RuleText number='24.4'>A player can control a planet that he does not have any units on; he places a control token on that planet to mark that he controls it.</RuleText>
      <RuleText number='24.5'>Except during the invasion step of a tactical action, a player loses control of a planet if he no longer has units on it and another player has units on it
        <ul>
          <li>The player that placed units on the planet gains control of that planet.</li>
          <li>During the invasion step of a tactical action, control is determined during the “Establish Control” step.</li>
        </ul>
      </RuleText>
      <RuleText number='24.6'>A player can also lose control of a planet through some game effects.</RuleText>
      <RuleText number='24.7'>If a player loses control of a planet that contains his control token, he removes his control token from the planet.</RuleText>
    </RuleSection>

    <RuleSection
      number='25'
      title='Cost (Attribute)'
      related={['Producing Units', 'Resources']}>
      <RuleText>Cost is an attribute of some units that is presented on those units’ faction sheets and technology cards. A unit’s cost determines the number of resources a player must spend to produce that unit.</RuleText>
      <RuleText number='25.1'>To produce a unit, a player must spend a number of resources equal to or greater than the cost of the unit he is producing.</RuleText>
      <RuleText number='25.2'>If the cost is accompanied by two icons—typically for fighters and ground forces—a player produces two of that unit for that cost.</RuleText>
      <RuleText number='25.3'>If a unit does not have a cost, it cannot be produced.
        <ul>
          <li>Structures do not have costs and are usually placed by resolving the “Construction” strategy card.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='26'
      title='Custodians Token'
      related={['Agenda Phase', 'Influence', 'Victory Points']}>
      <RuleText>The custodians token begins each game on Mecatol Rex. The token represents the caretakers that safeguard the seat of the empire until the time when one of the great races claims the throne.</RuleText>
      <RuleText number='26.1'>Units can move into the system that contains Mecatol Rex following normal rules; however, players cannot commit ground forces to land on Mecatol Rex until the custodians token is removed from the planet.</RuleText>
      <RuleText number='26.2'>Before the “Commit Ground Forces” step of an invasion, the active player can remove the custodians token from Mecatol Rex by spending six influence. Then, he must commit at least one ground force to land on the planet.
        <ul>
          <li>If he cannot commit ground forces to land on Mecatol Rex, he cannot remove the custodians token.</li>
        </ul>
      </RuleText>
      <RuleText number='26.3'>When a player removes the custodians token from Mecatol Rex, he takes the token from the game board and places it in his play area. Then, he gains one victory point.</RuleText>
      <RuleText number='26.4'>After a player removes the custodians token from Mecatol Rex, the agenda phase is added to all subsequent game rounds, including the game round during which the custodians token was removed from Mecatol Rex.</RuleText>
    </RuleSection>

    <RuleSection
      number='27'
      title='Deals'
      related={['Promissory Notes', 'Trade Goods', 'Trade Goods']}>
      <RuleText>A deal is an agreement between two players that may or may not include a transaction that involves physical components.</RuleText>
      <RuleText number='27.1'>Players can make deals with each other at any time, even if they are not neighbors. However, deals that include a transaction must follow the rules for transactions, including that the players be neighbors.</RuleText>
      <RuleText number='27.2'>Deals are binding or non-binding according to the conditions of the deal.</RuleText>
      <RuleText number='27.3'>If the terms of a deal can be resolved immediately, it is a binding deal. When a deal is binding, a player must adhere to the terms of the agreement and whatever transactions, if any, were agreed upon.
        <ul>
          <li>The results of playing an action card, including the act of successfully resolving a card, are not instantaneous and cannot be guaranteed. They cannot be part of a binding deal.</li>
        </ul>
      </RuleText>
      <RuleText number='27.4'>If the terms of a deal cannot be resolved immediately, it is a non- binding deal. When a deal is non-binding, a player does not have to adhere to any part of the agreement if he chooses not to.</RuleText>
    </RuleSection>

    <RuleSection
      number='28'
      title='Defender'
      related={['Attacker', 'Invasion', 'Nebula', 'Space Combat']}>
      <RuleText>During either a space or ground combat, the player who is not the active player is the defender.</RuleText>
    </RuleSection>

    <RuleSection
      number='29'
      title='Destroyed'
      related={['Anti-Fighter Barrage', 'Bombardment', 'Space Cannon', 'Space Combat', 'Sustain Damage']}>
      <RuleText>Various game effects can cause a unit to be destroyed. When a player’s unit is destroyed, it is removed from the game board and returned to his reinforcements.</RuleText>
      <RuleText number='29.1'>When a player assigns hits that were produced against his units, he chooses a number of his units to be destroyed equal to the number of hits produced against his units.</RuleText>
      <RuleText number='29.2'>Forcing a player to remove a unit from the board by reducing the number of command tokens in his fleet pool does not count as destroying a unit.</RuleText>
    </RuleSection>

    <RuleSection
      number='30'
      title='Diplomacy (Strategy Card)'
      related={['Active System', 'Command Tokens', 'Initiative Order', 'Planets', 'Readied', 'Strategic Action', 'Strategy Card']}>
      <RuleText>The “Diplomacy” strategy card can be used to preemptively prevent other players from activating a specific system. It can also be used to ready planets. This card’s initiative value is “2.”</RuleText>
      <RuleText number='30.1'>During the action phase, if the active player has the “Diplomacy” strategy card, he can perform a strategic action to resolve that card’s primary ability.</RuleText>
      <RuleText number='30.2'>To resolve the primary ability on the “Diplomacy” strategy card, the active player chooses a system that contains a planet he controls other than the Mecatol Rex system and readies any of his exhausted planets in that system. Then, each other player places one command token from his reinforcements on that system.
        <ul>
          <li>If a player has no command tokens in his reinforcements, he places one of his choice from his command sheet.</li>
          <li>If a player already has a command token in the chosen system, he does not place a command token there.</li>
        </ul>
      </RuleText>
      <RuleText number='30.3'>After the active player resolves the primary ability of the “Diplomacy” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from his strategy pool to ready up to two exhausted planets he controls.</RuleText>
    </RuleSection>

    <RuleSection
      number='31'
      title='Elimination'
      related={['Agenda Card', 'Control', 'Ground Forces', 'Production', 'Promissory Notes']}>
      <RuleText>A player who is eliminated is no longer part of the game.</RuleText>
      <RuleText number='31.1'>A player is eliminated when he meets all of the following three conditions:
        <ul>
          <li>The player has no ground forces on the game board.</li>
          <li>The player has no unit that has “Production.”</li>
          <li>The player does not control any planets.</li>
        </ul>
      </RuleText>
      <RuleText number='31.2'>When a player becomes eliminated, all of the units, command tokens, control tokens, promissory notes, technologies, command sheets, as well as the faction sheet that matches his faction or color are returned to the game box, including those in his reinforcements.</RuleText>
      <RuleText number='31.3'>When a player becomes eliminated, all agenda cards he owns are discarded.</RuleText>
      <RuleText number='31.4'>When a player becomes eliminated, each promissory note he has that matches another player’s faction or color is returned to that player.
        <ul>
          <li>Promissory notes that match the eliminated player are returned to the game box, even if another player has them.</li>
        </ul>
      </RuleText>
      <RuleText number='31.5'>When a player becomes eliminated, all action cards in his handare discarded.</RuleText>
      <RuleText number='31.6'>When a player becomes eliminated, his strategy cards arereturned to the common play area whether they have been exhausted or not.</RuleText>
      <RuleText number='31.7'>When a player becomes eliminated, his secret objectives are shuffled back into the secret objective deck whether they have been completed or not.</RuleText>
      <RuleText number='31.8'>If the speaker becomes eliminated, the speaker token passes to the player to his left.</RuleText>
      <RuleText number='31.9'>If a game that started with five or more players becomes a game with four or fewer players due to elimination, the players continue to select only one strategy card during the strategy phase.</RuleText>
      <RuleText number='31.10'>When players are eliminated, faction-specific tokens interact with the game as follows:
        <ul>
          <li>If a player becomes eliminated and the Nekro Virus’ assimilator “X” or assimilator “Y” token is placed on one of his faction technologies, that technology remains in play.</li>
          <li>If the Ghost of Creuss player becomes eliminated, his wormhole tokens remain on the game board for the remainder of the game.</li>
          <li>If the Naalu player becomes eliminated while another player has the Naalu player’s “0” token, that token remains with its current player until the end of the status phase, and then it is removed from play.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='32'
      title='Exhausted'
      related={['Influence', 'Planets', 'Resources', 'Status Phase']}>
      <RuleText>Some cards can be exhausted. A player cannot resolve abilities or spend the resources or influence of an exhausted card.</RuleText>
      <RuleText number='32.1'>To exhaust a card, a player flips the card facedown.</RuleText>
      <RuleText number='32.2'>During the “Ready Cards” step of the status phase, each player readies all of his exhausted cards by flipping them faceup.</RuleText>
      <RuleText number='32.3'>A player exhausts his planet cards to spend either the resources or influence on that card.</RuleText>
      <RuleText number='32.4'>Abilities, including some found on technology cards, may instruct a player to exhaust a card to resolve those abilities. If a card is already exhausted, it cannot be exhausted again.
        <ul>
          <li>Passive abilities on an exhausted card are still in effect while that card is exhausted.</li>
        </ul>
      </RuleText>
      <RuleText number='32.5'>After a player performs a strategic action, he exhausts the strategy card that corresponds to that action.</RuleText>
    </RuleSection>

    <RuleSection
      number='33'
      title='Fighter Tokens'
      related={['Infantry Tokens', 'Producing Units']}>
      <RuleText>A fighter token functions as a plastic fighter unit for all game purposes.</RuleText>
      <RuleText number='33.1'>When producing a fighter unit, a player can use a fighter token from the supply instead of a plastic piece.</RuleText>
      <RuleText number='33.2'>Players can replace their plastic fighters with tokens at any time.</RuleText>
      <RuleText number='33.3'>If a player ever has a fighter token in a system that does not contain one of his plastic fighters, he must replace it with one of his plastic fighters from his reinforcements.
        <ul>
          <li>If he cannot replace the token, the unit is destroyed.</li>
        </ul>
      </RuleText>
      <RuleText number='33.4'>Fighter tokens come in values of one and three. A player can swap between these tokens as necessary.</RuleText>
    </RuleSection>

    <RuleSection
      number='34'
      title='Fleet Pool'
      related={['Command Sheet', 'Command Tokens', 'Ships', 'System Tiles']}>
      <RuleText>The fleet pool is an area of a player’s command sheet.</RuleText>
      <RuleText number='34.1'>The number of command tokens in a player’s fleet pool indicates the maximum number of non-fighter ships that a player can have in a system.
        <ul>
          <li>Units that are on planets or are being transported by a ship with capacity do not count against a player’s fleet pool.</li>
          <li>Units that are moving through systems do not count against a player’s fleet pool in those systems.</li>
        </ul>
      </RuleText>
      <RuleText number='34.2'>Players place command tokens in their fleet pools with the ship silhouette faceup.</RuleText>
      <RuleText number='34.3'>If at any time, the number of a player’s ships in a system exceeds the number of tokens in his fleet pool, he chooses and removes excess ships in that system, returning them to his reinforcements.
      <ul>
        <li>Units that are on planets or are being transported by a ship with capacity do not count against a player’s fleet pool.</li>
        <li>Units that are moving through systems do not count against a player’s fleet pool in those systems.</li>
      </ul>
      </RuleText>
      <RuleText number='34.4'>Players do not spend command tokens from this pool.</RuleText>
    </RuleSection>

    <RuleSection
      number='35'
      title='Game Board'
      related={['System Tiles']}>
      <RuleText>The game board consists of all system tiles in play.</RuleText>
      <RuleText number='35.1'>The game board consists of all system tiles that were placed during setup, even if the edges of those tiles do not touch any other system tiles, such as the Ghosts of Creuss’ home system.</RuleText>
    </RuleSection>

    <RuleSection
      number='36'
      title='Game Round'
      related={['Action Phase', 'Agenda Phase', 'Custodians Token', 'Status Phase', 'Strategy Phase']}>
      <RuleText>A game round consists of the following four phases:
        <ol>
          <li>Strategy Phase</li>
          <li>Action Phase</li>
          <li>Status Phase</li>
          <li>Agenda Phase</li>
        </ol>
      </RuleText>
      <RuleText number='36.1'>Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round.</RuleText>
      <RuleText number='36.2'>Player turns occur during the action phase.</RuleText>
      <RuleText number='36.3'>Abilities that last until the end of a player’s turn do not persist for the duration of a game round or into the other phases of that game round. Those effects end at the end of that player’s turn, before the next player’s turn begins.</RuleText>
    </RuleSection>

    <RuleSection
      number='37'
      title='Gravity Rift'
      related={['Anomalies', 'Movement']}>
      <RuleText>A gravity rift is an anomaly that affects movement.</RuleText>
      <RuleText number='37.1'>A ship that will move out of or through a gravity rift at any time during its movement, applies +1 to its move value.
        <ul>
          <li>This can allow a ship to reach the active system from farther away than it normally could.</li>
        </ul>
      </RuleText>
      <RuleText number='37.2'>For each ship that would move out of or through a gravity rift, one die is rolled immediately before it exits the gravity rift system; on a result of 1–3, that ship is removed from the board.
        <ul>
          <li>Dice are not rolled for units that are being transported by ships with capacity.</li>
          <li>Units that are being transported are removed from the board if the ship transporting them is removed from the board.</li>
          <li>Units that are removed are returned to the player’s reinforcements.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='38'
      title='Ground Combat'
      related={['Invasion', 'Planets']}>
      <RuleText>During the “Invasion” step of a tactical action, if the active player commits ground forces to land on a planet that contains another player’s ground forces, those players resolve a ground combat on that planet. To resolve a ground combat, players perform the following steps:</RuleText>
      <RuleText number='38.1'>STEP 1—ROLL DICE: Each player rolls one die for each ground force he has on the planet; this is a combat roll. If a unit’s combat roll produces a result that is equal to or greater than that unit’s combat value, that roll produces a hit.
        <ul>
          <li>If a unit’s combat value contains two or more burst icons, the player rolls one die for each burst icon instead.</li>
        </ul>
      </RuleText>
      <RuleText number='38.2'>STEP 2—ASSIGN HITS: Each player must choose one of his ground forces on the planet to be destroyed for each hit result his opponent produced.
        <ul>
          <li>When a unit is destroyed, the player who controls that unit removes it from the board and places it in his reinforcements.</li>
        </ul>
      </RuleText>
      <RuleText number='38.3'>After assigning hits, if both players still have ground forces on the planet, players resolve a new combat round starting with the “Roll Dice” step.</RuleText>
      <RuleText number='38.4'>Ground combat ends immediately when only one player (or neither player) has ground forces on the planet.
        <ul>
          <li>“End of combat” and “end of combat round” effects still occur.</li>
          <li>After a combat ends, the player with one or more ground forces remaining on the planet is the winner of the combat; the other player is the loser of the combat.</li>
          <li>If neither player has a ground force remaining, then there is no winner; the combat ends in a draw.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='39'
      title='Ground Forces'
      related={['Capacity', 'Control', 'Infantry Tokens', 'Transport', 'Units']}>
      <RuleText>A ground force is a type of unit. All infantry units in the game are ground forces. Some races have unique infantry units.</RuleText>
      <RuleText number='39.1'>Ground forces are always either on planets or being transported by ships that have a capacity value.</RuleText>
      <RuleText number='39.2'>Ground forces being transported by a ship are placed in a system’s space area along with the ship that is transporting them.</RuleText>
      <RuleText number='39.3'>There is no limit to the number of ground forces a player can have on a planet.</RuleText>
    </RuleSection>

    <RuleSection
      number='40'
      title='Imperial (Strategy Card)'
      related={['Initiative Order', 'Objective Cards', 'Strategic Action', 'Strategy Card']}>
      <RuleText>The “Imperial” strategy card allows players to score victory points and draw secret objectives. This card’s initiative value is “8.”</RuleText>
      <RuleText number='40.1'>During the action phase, if the active player has the “Imperial” strategy card, he can perform a strategic action to resolve that card’s primary ability.</RuleText>
      <RuleText number='40.2'>To resolve the primary ability on the “Imperial” strategy card, the active player can score one public objective of his choice if he meets that objective’s requirements as described on its card. Then, if the active player controls Mecatol Rex, he gains one victory point; if he does not control Mecatol Rex, he can draw one secret objective card.</RuleText>
      <RuleText number='40.3'>After the active player resolves the primary ability of the “Imperial” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from his strategy pool to draw one secret objective card.</RuleText>
      <RuleText number='40.4'>If a player has more than three secret objective cards after drawing a secret objective, he must choose one of his unscored secret objectives and return it to the secret objective deck.  This number includes the secret objective cards in the player’s hand and the cards he has already scored. Then, he shuffles the secret objective deck.</RuleText>
    </RuleSection>

    <RuleSection
      number='41'
      title='Infantry Tokens'
      related={['Fighter Tokens', 'Producing Units']}>
      <RuleText>An infantry token functions as a plastic infantry unit for all game purposes.</RuleText>
      <RuleText number='41.1'>When producing an infantry unit, a player can use an infantry token from the supply instead of a plastic piece.</RuleText>
      <RuleText number='41.2'>Players can replace their plastic infantry with tokens at any time.</RuleText>
      <RuleText number='41.3'>If a player ever has an infantry token on a planet that does not contain one of his plastic infantry or in the space area of a system that does not contain one of his plastic infantry, he must replace it with one of his plastic infantry from his reinforcements.
        <ul>
          <li>If he cannot replace the token, the unit is destroyed.</li>
        </ul>
      </RuleText>
      <RuleText number='41.4'>Infantry tokens come in values of one and three. A player can swap between these tokens as necessary.</RuleText>
    </RuleSection>

    <RuleSection
      number='42'
      title='Influence'
      related={['Agenda Phase', 'Exhausted', 'Leadership', 'Agenda Phase']}>
      <RuleText>Influence represents a planet’s political power. Players spend influence to gain command tokens using the “Leadership” strategy card, and the influence values of planets are used to cast votes during the agenda phase.</RuleText>
      <RuleText number='42.1'>A planet’s influence is the rightmost value (surrounded by a blue border) found on the planet’s system tile and planet card.</RuleText>
      <RuleText number='42.2'>A player can spend a planet’s influence by exhausting that planet’s card.</RuleText>
      <RuleText number='42.3'>A player can spend a trade good as if it were one influence.
        <ul>
          <li>Players cannot spend trade goods to cast votes during the agenda phase.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='43'
      title='Initiative Order'
      related={['Action Phase', 'Strategy Card', 'Status Phase']}>
      <RuleText>Initiative order is the order in which players resolve steps of the action and status phases.</RuleText>
      <RuleText number='43.1'>Initiative order is determined by the initiative numbers on strategy cards.
        <ul>
          <li>A player who has the Naalu “0” token has the initiative number 0.</li>
        </ul>
      </RuleText>
      <RuleText number='43.2'>Initiative order begins with the player who has the lowest- numbered strategy card and proceeds to the player who has the strategy card that is next in numerical order.
        <ul>
          <li>Only strategy cards that were chosen during the strategy phase are used when determining initiative order; strategy cards not chosen during the strategy phase are ignored.</li>
        </ul>
      </RuleText>
      <RuleText number='43.3'>When playing with three or four players, a player’s initiative is determined only by his lowest-numbered strategy card.</RuleText>
    </RuleSection>

    <RuleSection
      number='44'
      title='Invasion'
      related={['Bombardment', 'Combat', 'Control', 'Ground Combat', 'Ground Forces', 'Opponent', 'PDS', 'Planets']}>
      <RuleText>Invasion is a step of the tactical action during which the active player can land ground forces on planets to gain control of those planets. To resolve an invasion, players perform the following steps:</RuleText>
      <RuleText number='44.1'>STEP 1—BOMBARDMENT: The active player may use the “Bombardment” ability of any of his units in the active system.</RuleText>
      <RuleText number='44.2'>STEP 2—COMMIT GROUND FORCES: If the active player has ground forces in the space area of the active system, he may commit any number of those ground forces to land on any of the planets in that system.
        <ul>
          <li>To commit a ground force to a planet, the active player places that ground force unit on that planet.</li>
          <li>The planet may contain another player’s ground forces.</li>
          <li>If the active player does not wish to commit ground forces, he proceeds to the “Production” step of the tactical action.</li>
        </ul>
      </RuleText>
      <RuleText number='44.3'>STEP 3—SPACE CANNON DEFENSE: If the active player commits any ground forces to a planet that contains units that have the “Space Cannon” ability, those “Space Cannon” abilities can be used against the committed ground forces.
        <ul>
          <li>If the active player committed ground forces to more than one planet that contained units with a “Space Cannon” ability, the active player chooses the order in which those “Space Cannon” abilities are resolved.</li>
        </ul>
      </RuleText>
      <RuleText number='44.4'>STEP 4—GROUND COMBAT: If the active player commits ground forces to land on a planet that contains another player’s ground forces, those players resolve a ground combat on that planet.
        <ul>
          <li>If players must resolve a combat on more than one planet, the active player chooses the order in which those combats are resolved.</li>
        </ul>
      </RuleText>
      <RuleText number='44.5'>STEP 5—ESTABLISH CONTROL: The active player gains control of each planet he committed ground forces to that still contains at least one of his ground forces.
        <ul>
          <li>When a player gains control of a planet, any structures on the planet that belong to other players are immediately destroyed.</li>
          <li>When a player gains control of a planet, he gains the planet card that matches that planet and exhausts that card.</li>
          <li>A player cannot gain control of a planet he already controls.</li>
          <li>If there was a combat, and all units belonging to both players were destroyed, the player who was the defender retains control of the planet and places one of his control markers on the planet.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='45'
      title='Leadership (Strategy Card)'
      related={['Command Sheet', 'Command Tokens', 'Influence', 'Initiative Order', 'Strategic Action', 'Strategy Card']}>
      <RuleText>The “Leadership” strategy card allows players to gain command tokens. This card’s initiative value is “1.”</RuleText>
      <RuleText number='45.1'>During the action phase, if the active player has the “Leadership” strategy card, he can perform a strategic action to resolve that card’s primary ability.</RuleText>
      <RuleText number='45.2'>To resolve the primary ability on the “Leadership” strategy card, the active player gains three command tokens. Then, he can spend any amount of his influence to gain one command token for every three influence he spends.</RuleText>
      <RuleText number='45.3'>After the active player resolves the primary ability of the “Leadership” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend any amount of influence to gain one command token for every three influence he spends.</RuleText>
      <RuleText number='45.4'>When a player gains command tokens, he places each token on his command sheet in the pool of his choice.</RuleText>
    </RuleSection>

    <RuleSection
      number='46'
      title='Mecatol Rex'
      related={['Custodians Token']}>
      <RuleText>Mecatol Rex is the planet placed in the center of the game board during setup.</RuleText>
      <RuleText number='46.1'>During setup, the custodians token is placed on Mecatol Rex. This token prevents a player from committing ground forces to land on the planet unless he spends six influence to remove the token.</RuleText>
    </RuleSection>

    <RuleSection
      number='47'
      title='Modifiers'
      related={['Combat', 'Cost', 'Move']}>
      <RuleText>A modifier is a number that is applied by an ability to increase or decrease the attribute values of a unit or the results of a die roll.</RuleText>
      <RuleText number='47.1'>A modifier is always preceded by the word “apply” followed by a numerical value.</RuleText>
      <RuleText number='47.2'>A modifier value preceded by a “+” is added to the attribute or result being modified; a modifier value preceded by a “-” is subtracted from the attribute or result being modified.</RuleText>
    </RuleSection>

    <RuleSection
      number='48'
      title='Move (Attribute)'
      related={['Movement', 'Tactical Action']}>
      <RuleText>Move is an attribute of some units that is presented on those units’ faction sheets and technology cards.</RuleText>
      <RuleText number='48.1'>A unit’s move value indicates the distance from its current system that it can move during the “Movement” step of a tactical action.</RuleText>
    </RuleSection>

    <RuleSection
      number='49'
      title='Movement'
      related={['Action Phase', 'Active System', 'Capacity', 'Space Cannon', 'Tactical Action', 'Transport']}>
      <RuleText>A player can move his ships by resolving a tactical action during the action phase. Additionally, some abilities can move a unit outside of the tactical action.</RuleText>
      <RuleText number='49.2' subheading='Tactical Action Movement' />
      <RuleText number='49.3'>Most ships have a move value printed on their faction sheets and technology cards. This value indicates the distance from its current system that a ship can move.</RuleText>
      <RuleText>To resolve movement, players perform the following steps:</RuleText>
      <RuleText number='49.4'>STEP 1—MOVE SHIPS: A player can move any number of his eligible ships into the active system, obeying the following rules:
        <ul>
          <li>The ship must end its movement in the active system.</li>
          <li>The ship cannot move through a system that contains ships that are controlled by another player.</li>
          <li>The ship cannot move if it started its movement in another system that contains one of its faction’s command tokens.</li>
          <li>The ship can move through systems that contain its own faction’s command tokens.</li>
          <li>The ship can move out of the active system and back into it if its move value is high enough.</li>
          <li>The ship must move along a path of adjacent systems, and the number of systems the ship enters cannot exceed its move value.</li>
        </ul>
      </RuleText>
      <RuleText number='49.5'>When a ship with a capacity value moves or is moved, it may transport ground forces and fighters.</RuleText>
      <RuleText number='49.6'>The active player declares which of his ships are moving before any ships move. Those ships arrive in the active system simultaneously.</RuleText>
      <RuleText number='49.7'>STEP 2—SPACE CANNON OFFENSE: After the “Move Ships” step, players can use the “Space Cannon” abilities of their units in the active system.</RuleText>
      <RuleText number='49.8' subheading='Ability Movement' />
      <RuleText number='49.9'>If an ability moves a unit outside of the “Movement” step of a tactical action, players follow the rules specified by that ability; neither a unit’s move value nor the rules specified above apply.</RuleText>
    </RuleSection>

    <RuleSection
      number='50'
      title='Nebula'
      related={['Anomalies']}>
      <RuleText>A nebula is an anomaly that affects movement and combat.</RuleText>
      <RuleText number='50.1'>A ship can only move into a nebula if it is the active system.
        <ul>
          <li>A ship cannot move through a nebula. That is, a ship cannot move into and out of a nebula during the same movement.</li>
        </ul>
      </RuleText>
      <RuleText number='50.2'>A ship that begins the “Movement” step of a tactical action in a nebula treats its move value as “1” for the duration of that step.
        <ul>
          <li>Other abilities and effects can increase this number.</li>
        </ul>
      </RuleText>
      <RuleText number='50.3'>If a space combat occurs in a nebula, the defender applies +1 to the combat rolls of his ships during that combat.</RuleText>
    </RuleSection>

    <RuleSection
      number='51'
      title='Neighbors'
      related={['Neighbors', 'Promissory Notes', 'Transactions']}>
      <RuleText>Two players are neighbors if they both have a unit or control a planet in the same system. They are also neighbors if they both have a unit or control a planet in systems that are adjacent to each other.</RuleText>
      <RuleText number='51.1'>Players can resolve transactions with their neighbors.</RuleText>
      <RuleText number='51.2'>Players are neighbors if the adjacency of systems is granted by a wormhole.</RuleText>
      <RuleText number='51.3'>Players are neighbors with the Ghosts of Creuss if the Ghosts of Creuss’ “Quantum Entanglement” faction ability is causing adjacency from the perspective of the Ghosts of Creuss player.</RuleText>
    </RuleSection>

    <RuleSection
      number='52'
      title='Objective Cards'
      related={['Imperial', 'Status Phase', 'Victory Points']}>
      <RuleText>Players can score objectives to gain victory points.</RuleText>
      <RuleText number='52.1'>There are two types of objective cards: public objectives and secret objectives.
        <ul>
          <li>Each public objective has a “I” or “II” on the back of its card; all other objectives are secret objectives.</li>
        </ul>
      </RuleText>
      <RuleText number='52.2'>Each objective card indicates a number of victory points that a player gains by scoring that objective.</RuleText>
      <RuleText number='52.3'>Each objective card indicates the phase during which a player can score that objective—either the status phase or action phase.</RuleText>
      <RuleText number='52.4'>Each objective card describes the requirement a player must fulfill to score that objective.</RuleText>
      <RuleText number='52.5'>If a player fulfills the requirement described on an objective card, he can score that objective following the timing indicated on the card, either during the action phase or the status phase.
        <ul>
          <li>When a player scores an objective during the status phase, he must fulfill the requirement on the card during the “Score Objectives” step of the status phase to score that objective.</li>
          <li>When a player scores an objective during the action phase, he can do so at any time during that phase.</li>
        </ul>
      </RuleText>
      <RuleText number='52.6'>A player can score a maximum of one public objective and one secret objective during each status phase.</RuleText>
      <RuleText number='52.7'>A player can score any number of objectives during a turn of the action phase; however, he can only score one objective during or after each combat.
        <ul>
          <li>A player can score an objective during both the space combat and the ground combat during the same tactical action.</li>
        </ul>
      </RuleText>
      <RuleText number='52.8'>A player can score each objective only once during the game.</RuleText>
      <RuleText number='52.9'>If an objective requires a player to destroy one or more units, those units can be destroyed by producing hits against them, playing action cards, using technology, or any number of other abilities that use the “destroy” terminology.
        <ul>
          <li>Forcing a player to remove a unit from the board by reducing the number of command tokens in his fleet pool does not count as destroying a unit.</li>
        </ul>
      </RuleText>
      <RuleText number='52.10'>Players can score some objectives by spending resources, influence, or tokens, as described by the objective card. To score such an objective, a player must pay the specified cost at the time indicated on the card.</RuleText>
      <RuleText number='52.11' subheading='Public Objectives'>A public objective is an objective that is revealed to all players.</RuleText>
      <RuleText number='52.12'>When scoring a public objective, the player places one of his control tokens on that objective’s card. Then, he advances his control token on the victory point track a number of spaces equal to the number of victory points he gained.</RuleText>
      <RuleText number='52.13'>Each game contains five stage I and five stage II public objective cards that the speaker places facedown near the victory point track during setup.
        <ul>
          <li>The speaker reveals two of the stage I objective cards during setup. All other objective cards remain facedown.</li>
        </ul>
      </RuleText>
      <RuleText number='52.14'>During each status phase, the speaker reveals a facedown public objective card.
        <ul>
          <li>The speaker does not reveal stage II objective cards until all stage I objective cards are revealed.</li>
        </ul>
      </RuleText>
      <RuleText number='52.15'>If the speaker must reveal a facedown public objective card but all public objective cards are already revealed, the game ends immediately.
        <ul>
          <li>The player with the most victory points is the winner. If one or more players are tied for having the most victory points, the tied player who is first in initiative order is the winner.</li>
        </ul>
      </RuleText>
      <RuleText number='52.16'>A player cannot score public objectives if he does not control each of the planets in his home system.</RuleText>
      <RuleText number='52.17' subheading='Secret Objectives'> A secret objective is an objective that is controlled by one player and is hidden from all other players until it is scored.</RuleText>
      <RuleText number='52.18'>When scoring a secret objective, a player reveals the objective by placing it faceup in his play area. Then, he places one of his control tokens on that objective’s card and advances his control token on the victory point track a number of spaces equal to the number of victory points he gained.</RuleText>
      <RuleText number='52.19'>A player can only score his own secret objectives; he cannot score secret objectives revealed by other players.</RuleText>
      <RuleText number='52.20'>Each player begins the game with one secret objective.</RuleText>
      <RuleText number='52.21'>Each player can have up to three total scored and unscored secret objectives.
        <ul>
          <li>If a player draws a secret objective and has more than three, he must choose one of his unscored secret objectives and return it to the deck. Then, he shuffles the secret objective deck.</li>
        </ul>
      </RuleText>
      <RuleText number='52.22'>A player can gain secret objectives by resolving either the primary or secondary ability of the “Imperial” strategy card.</RuleText>
    </RuleSection>

    <RuleSection
      number='53'
      title='Opponent'
      related={['Ground Combat', 'Invasion', 'Space Combat']}>
      <RuleText>During combat, a player’s opponent is the other player that either has ships in the system at the start of the space combat or has ground forces on the planet at the start of a ground combat.</RuleText>
      <RuleText number='53.1'>A player who does not have units on either side of a combat is not an opponent. He cannot use abilities or have abilities used against him that are used against an opponent.</RuleText>
    </RuleSection>

    <RuleSection
      number='54'
      title='PDS'
      related={['Structures', 'Space Cannon']}>
      <RuleText>A PDS (planetary defense system) is a structure that allows a player to defend his territory against invading forces.</RuleText>
      <RuleText number='54.1'>Each PDS has the “Space Cannon” ability.</RuleText>
      <RuleText number='54.2'>The primary way by which players acquire PDS units is by resolving either the primary or secondary ability of the “Construction” strategy card.</RuleText>
      <RuleText number='54.3'>A PDS unit is placed on a planet. Each planet can have a maximum of two PDS units.</RuleText>
      <RuleText number='54.4'>If a player’s PDS is ever on a planet that contains a unit that belongs to another player and does not contain any of his own ground forces, that PDS is destroyed.</RuleText>
    </RuleSection>

    <RuleSection
      number='55'
      title='Planets'
      related={['Control', 'Exhausted', 'Influence', 'Readied', 'Resources', 'System Tiles', 'Technology']}>
      <RuleText>Planets provide players with resources and influence. Planets are on system tiles and each has a name, a resource value, and an influence value. Some planets also have traits.</RuleText>
      <RuleText number='55.1'>A planet’s resources are indicated by the upper-left value that is surrounded by a yellow border.</RuleText>
      <RuleText number='55.2'>A planet’s influence is indicated by the lower-right value that is surrounded by a blue border.</RuleText>
      <RuleText number='55.3'>A planet’s trait has no inherent effects, but some game effects refer to a planet’s trait. There are three traits: cultural, hazardous, and industrial:
        <RuleImageBlock images={[
          { path: '/images/trait-cultural.svg', label: 'Cultural' },
          { path: '/images/trait-hazardous.svg', label: 'Hazardous' },
          { path: '/images/trait-industrial.svg', label: 'Industrial' }
        ]} />
      </RuleText>
      <RuleText number='55.4'>Some planets have a technology specialty, which allows those planets to be exhausted to satisfy a prerequisite when researching technology.</RuleText>
      <RuleText number='55.5' subheading='Planet Card'> Each planet has a corresponding planet card that displays its name, resource value, influence value, and trait, if it has one. If a player controls a planet, he keeps that planet’s card in his play area.</RuleText>
      <RuleText number='55.6'>A planet card has both a readied and exhausted state. When a planet is readied, it is placed faceup. When a planet is exhausted, it is placed facedown.</RuleText>
      <RuleText number='55.7'>A player can spend a readied planet’s resources or influence.</RuleText>
      <RuleText number='55.8'>A player cannot spend an exhausted planet’s resources or influence.</RuleText>
    </RuleSection>

    <RuleSection
      number='56'
      title='Planetary Shield (Unit Ability)'
      related={['Bombardment']}>
      <RuleText>Units cannot use the “Bombardment” ability against a planet that contains a unit that has the “Planetary Shield” ability.</RuleText>
      <RuleText number='56.1'>The “Planetary Shield” ability does not prevent a planet from being affected by the “X-89 Bacterial Weapon” technology.</RuleText>
      <RuleText number='56.2'>The “Planetary Shield” ability prevents an L1Z1X player from using his “Harrow” faction ability.</RuleText>
      <RuleText number='56.3'>If a war sun is in a system with any number of other players’ units that have the “Planetary Shield” ability, those units are treated as if they do not have that ability.
        <ul>
          <li>Units treated as if they do not have a “Planetary Shield” ability cannot use the “Magen Defense Grid” technology.</li>
          <li>A war sun can use its “Bombardment” ability against planets that contain units that have the “Planetary Shield” ability.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='57'
      title='Politics (Strategy Card)'
      related={['Action Cards', 'Agenda Card', 'Initiative Order', 'Speaker', 'Strategy Card', 'Strategic Action']}>
      <RuleText>The “Politics” strategy card allows players to draw action cards. Additionally, the active player chooses a new speaker and may be able to look at cards in the agenda deck. This card’s initiative value is “3.”</RuleText>
      <RuleText number='57.1'>During the action phase, if the active player has the “Politics” strategy card, he can perform a strategic action to resolve that card’s primary ability.</RuleText>
      <RuleText number='57.2'>To resolve the primary ability on the “Politics” strategy card, the active player resolves the following effects in order:
        <ol type='i'>
          <li>The active player chooses any player that does not have the speaker token. He may choose himself as long as he does not have the speaker token. The chosen player places the speaker token in his play area; he is now the speaker.</li>
          <li>The active player draws two action cards.</li>
          <li>The active player secretly looks at the top two cards of the agenda deck. Then, he places each card on either the top or the bottom of the deck. If he places both cards on either the top or bottom, he can place them in any order.</li>
        </ol>
      </RuleText>
      <RuleText number='57.3'>After the active player resolves the primary ability of the “Politics” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from his strategy pool to draw two action cards.</RuleText>
    </RuleSection>

    <RuleSection
      number='58'
      title='Producing Units'
      related={['Blockaded', 'Cost', 'Fighter Tokens', 'Infantry Tokens', 'Production', 'Space Dock', 'Tactical Action']}>
      <RuleText>The primary way in which a player produces new units is by resolving the “Production” abilities of his units during a tactical action. However, other game effects also allow players to produce units.</RuleText>
      <RuleText number='58.1'>Each unit that a player can produce has a cost value presented on its faction sheet or technology card. To produce a unit, a player must spend a number of resources from planets he controls equal to or greater than the cost value of the unit he is producing.
        <ul>
          <li>Any resources spent in excess of a unit’s cost are lost.</li>
          <li>If a player is producing multiple units at a time, he can add the cost of all the units he is producing to create a total cost before he spends any resources.</li>
        </ul>
      </RuleText>
      <RuleText number='58.2'>If the cost is accompanied by two icons—typically for fighters and ground forces—a player produces two of that unit for that cost.
        <ul>
          <li>Each of the two units counts toward the total number of units a player can produce.</li>
          <li>A player can choose to produce only one unit; however, he must still pay the entire cost.</li>
        </ul>
      </RuleText>
      <RuleText number='58.3'>When a player produces a unit through the use of his units’ “Production” abilities during a tactical action, he follows the rules of the “Production” ability to determine where he can place his units in the active system.</RuleText>
      <RuleText number='58.4'>When a player produces a unit through an ability outside of the tactical action, that ability will state where the player can place the units he is producing and how many units he can produce.</RuleText>
      <RuleText number='58.5'>A player is limited by the number of units in his reinforcements.
        <ul>
          <li>If he does not have enough units in his reinforcements, he can remove units from any systems that do not contain one of his command tokens and place them in his reinforcements. Then, he can produce any units that he removed. He cannot remove a unit in this way unless he is immediately producing a unit of that type.</li>
          <li>When producing a fighter or infantry unit, he can use a fighter or infantry token, as appropriate, from the supply instead of a plastic piece.</li>
        </ul>
      </RuleText>
      <RuleText number='58.6'>A player cannot produce ships in a system that contains other players’ ships, but he can still produce ground forces.</RuleText>
    </RuleSection>

    <RuleSection
      number='59'
      title='Production (Unit Ability)'
      related={['Blockaded', 'Producing Units', 'Space Dock']}>
      <RuleText>During the “Production” step of a tactical action, the active player can resolve the “Production” ability of each of his units that are in the active system in order to produce units.</RuleText>
      <RuleText number='59.1'>A unit’s “Production” ability on its faction sheet is always followed by a value. This value is the maximum number of units that this unit can produce.
        <ul>
          <li>If the active player has multiple units in the active system that have the “Production” ability, he can produce a number of units up to the combined total of all of his units’ production values in that system.</li>
          <li>When producing fighters or infantry, each individual unit counts toward the producing unit’s production limit.</li>
          <li>A player can choose to produce one fighter or infantry instead of two, but he must still pay the full cost.</li>
          <li>“Production” value from Arborec space docks cannot be used to produce infantry, even if the Arborec player controls other units with “Production” in the same system.</li>
        </ul>
      </RuleText>
      <RuleText number='59.2'>When a player produces ships by using “Production,” he must place them in the active system.</RuleText>
      <RuleText number='59.3'>When a player produces ground forces, he must place those unit on planets that contain a unit that used its “Production” ability.</RuleText>
      <RuleText number='59.4'>If a player uses the “Production” ability of a unit in a space area of a system to produce ground forces, those ground forces may either be placed on a planet the player controls in that system or in the space area of that system.
        <ul>
          <li>If a player places a ground force in the space area of a system, it cannot exceed that player’s capacity in that system.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='60'
      title='Promissory Notes'
      related={['Abilities', 'Elimination', 'Neighbors', 'Transactions']}>
      <RuleText>Each player begins the game with one unique and four generic promissory note cards that he can give to other players.</RuleText>
      <RuleText number='60.1'>Each promissory note contains timing text and ability text. A player can resolve any promissory note cards that he has by following the text on the card.
        <ul>
          <li>Promissory notes are not mandatory unless otherwise specified.</li>
        </ul>
      </RuleText>
      <RuleText number='60.2'>A player cannot play his own promissory notes. Since the cards are only valuable to other players, promissory notes can be traded as powerful negotiation tools.</RuleText>
      <RuleText number='60.3'>Promissory notes that are returned to a player are returned after their abilities have been completely resolved.</RuleText>
      <RuleText number='60.4'>If a promissory note is returned to a player, that player may give it to other players again as part of a future transaction.
        <ul>
          <li>An unrevealed promissory note is not subject to effects in its ability text that return the card if certain conditions are met.</li>
        </ul>
      </RuleText>
      <RuleText number='60.5'>When resolving a transaction, a player can trade a maximum of one promissory note from his hand to another player, even if that card originally belonged to another player.
        <ul>
          <li>Promissory notes in the play area cannot be traded.</li>
        </ul>
      </RuleText>
      <RuleText number='60.6'>Players should keep their hands of promissory notes hidden.</RuleText>
      <RuleText number='60.7'>If a player is eliminated, all of the promissory notes that match his color or faction are returned to the game box, including those that are in play or owned by other players.
        <ul>
          <li>Other players’ promissory notes are returned to those players.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='61'
      title='Readied'
      related={['Abilities', 'Exhausted', 'Status Phase']}>
      <RuleText>Cards have a readied state, which indicates that a player can exhaust or resolve the abilities on those cards.</RuleText>
      <RuleText number='61.1'>A card that is readied is placed faceup in a player’s play area; a card that is exhausted is placed facedown in a player’s area.</RuleText>
      <RuleText number='61.2'>A player can exhaust a readied planet card to spend resources or influence from that card’s planet.</RuleText>
      <RuleText number='61.3'>A player can exhaust certain readied technology cards to resolve those cards’ abilities.
        <ul>
          <li>Such a technology will specifically instruct a player to exhaust the card as part of the ability’s cost.</li>
        </ul>
      </RuleText>
      <RuleText number='61.4'>If a card is exhausted, a player cannot resolve that card’s abilities or spend resources or influence on that card until it is readied.</RuleText>
      <RuleText number='61.5'>During a “Ready Cards” step, each player readies all of his exhausted cards by flipping them faceup.</RuleText>
      <RuleText number='61.6'>When a player performs a strategic action, he exhausts his chosen strategy card.
        <ul>
          <li>That card is later readied during the status phase.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='62'
      title='Reinforcements'
      related={['Command Tokens', 'Component Limitations', 'Units']}>
      <RuleText>A player’s reinforcements are his personal supply of units and command tokens that are not on the game board or otherwise in use.</RuleText>
      <RuleText number='62.1'>The components in a player’s reinforcements are limited.</RuleText>
    </RuleSection>

    <RuleSection
      number='63'
      title='Rerolls'
      related={['Abilities', 'Action Cards', 'Ground Combat', 'Space Combat']}>
      <RuleText>Some game effects instruct a player to reroll dice.</RuleText>
      <RuleText number='63.1'>When a die is rerolled, its new result is used instead of its previous result.</RuleText>
      <RuleText number='63.2'>The same ability cannot be used to reroll the same die multiple times, but multiple abilities can be used to reroll a single die.</RuleText>
      <RuleText number='63.3'>Die rerolls must occur immediately after rolling the dice, before other abilities or dice rolls are resolved.</RuleText>
    </RuleSection>

    <RuleSection
      number='64'
      title='Resources'
      related={['Exhausted', 'Planets', 'Producing Units', 'Trade Goods']}>
      <RuleText>Resources represent a planet’s material value and industry. Many game effects, such as producing units, require players to spend resources.</RuleText>
      <RuleText number='64.1'>A planet’s resources are the leftmost value that is surrounded by a yellow border on the planet’s system tile and planet card.</RuleText>
      <RuleText number='64.2'>A player spends a planet’s resources by exhausting its card.</RuleText>
      <RuleText number='64.3'>A player can spend a trade good as if it were one resource.</RuleText>
    </RuleSection>


    <RuleSection
      number='65'
      title='Ships'
      related={['Capacity', 'Cost', 'Combat', 'Fleet Pool', 'Move', 'Space Combat', 'Units']}>
      <RuleText>A ship is a unit type consisting of carriers, cruisers, dreadnoughts, destroyers, fighters, and war suns. Each race also has a unique flagship.</RuleText>
      <RuleText number='65.1'>Ships are always placed in space.</RuleText>
      <RuleText number='65.2'>A player can have a number of ships in a system equal to or less than the number of command tokens in his fleet pool.
        <ul>
          <li>Fighters do not count toward the fleet pool limit, and instead count against a player’s capacity.</li>
        </ul>
      </RuleText>
      <RuleText number='65.3'>Ships can have any number of the following attributes: cost, combat, move, and capacity. These attributes are shown on both a ship’s faction sheet and a ship’s technology cards.</RuleText>
    </RuleSection>


    <RuleSection
      number='66'
      title='Space Cannon (Unit Ability)'
      related={['Active System', 'Attacker', 'Defender', 'Destroyed', 'Invasion', 'Sustain Damage', 'Movement', 'Tactical Action']}>
      <RuleText>A unit that has the “Space Cannon” ability can use it during two different steps of a player’s tactical action: after the “Move Ships” substep (Space Cannon Offense) and during an invasion (Space Cannon Defense).</RuleText>
      <RuleText number='66.1'>A player is not required to be the active player to use the “Space Cannon” abilities of his units.</RuleText>
      <RuleText number='66.2' subheading='Space Cannon Offense'> During a tactical action, after the “Move Ships” substep of the “Movement” step, beginning with the active player and proceeding clockwise, each player may use the “Space Cannon” ability of each of his units in the active system by performing the following steps:</RuleText>
      <RuleText number='66.3'>STEP 1—ROLL DICE: The player rolls dice for each of his units in the active system that has the “Space Cannon” ability; this is a space cannon roll. One hit is produced for each result that is equal to or greater than the unit’s “Space Cannon” value.
        <ul>
          <li>If a unit has a “Space Cannon” ability, it is present on its faction sheet and technology cards.</li>
          <li>“Space Cannon” is displayed as “Space Cannon X (Y).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all “Space Cannon” abilities are accompanied by a (Y) value; a space cannon roll for such a unit consists of one die.</li>
          <li>If a player has the “Deep Space Cannon” technology, he can use the “Space Cannon” ability of his PDS units that are in systems that are adjacent to the active system. The hits are still assigned to units in the active system.</li>
          <li>Game effects that reroll, modify, or otherwise affect combat rolls do not affect space cannon rolls.</li>
        </ul>
      </RuleText>
      <RuleText number='66.4'>This ability can be used even if no ships were moved during the “Move Ships” step.</RuleText>
      <RuleText number='66.5'>STEP 2—ASSIGN HITS: The player whose units have been targeted by “Space Cannon” must choose and destroy one of his ships in the active system for each hit result produced against his units. 
        <ul>
          <li>Players other than the active player must target the active player’s units.</li>
          <li>If the active player is using the “Space Cannon” ability of his units, he chooses a player who has ships in the active system. That player must choose and destroy one of his ships in the active system for each hit the space cannon roll produced.</li>
        </ul>
      </RuleText>
      <RuleText number='66.6' subheading='Space Cannon Defense'> During the invasion step of a tactical action, after ground forces have been committed to land on planets, players other than the active player can resolve the “Space Cannon” abilities of their units on those planets by performing the following these steps:</RuleText>
      <RuleText number='66.7'>STEP 1—ROLL DICE: Each player may use the “Space Cannon” ability of each of his units on the invaded planet by rolling a specific number of dice for each of those units; this is called a space cannon roll. A hit is produced for each die roll that is equal to or greater than the unit’s “Space Cannon” value.
        <ul>
          <li>If a unit has a “Space Cannon” ability, it is present on its faction sheet and technology cards.</li>
          <li>“Space Cannon” is displayed as “Space Cannon X (Y).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all “Space Cannon” abilities are accompanied by a (Y) value; a space cannon roll for such a unit consists of one die.</li>
          <li>Game effects that reroll, modify, or otherwise affect combat rolls do not affect space cannon rolls.</li>
          <li>Game effects that allow the use of “Space Cannon” abilities against ships in adjacent systems have no effect during Space Cannon Defense.</li>
        </ul>
      </RuleText>
      <RuleText number='66.8'>STEP 2—ASSIGN HITS: The active player must choose and destroy one of his ground forces on the planet for each hit the space cannon roll produced.
        <ul>
          <li>Hits can only be assigned to units that were committed to the same planet as the units using the “Space Cannon” ability.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='67'
      title='Space Combat'
      related={['Capacity', 'Fleet Pool', 'Opponent', 'Sustain Damage', 'Tactical Action', 'Transport']}>
      <RuleText>After resolving the “Space Cannon Offense” step of a tactical action, if two players have ships in the active system, those players must resolve a space combat.</RuleText>
      <RuleText number='67.1'>If the active player is the only player with ships in the system, he skips the “Space Combat” step of the tactical action and proceeds to the “Invasion” step.</RuleText>
      <RuleText number='67.2'>If an ability occurs “before combat,” it occurs immediately before the “Anti-Fighter Barrage” step.</RuleText>
      <RuleText>To resolve a space combat, players perform the following steps:</RuleText>
      <RuleText number='67.3'>STEP 1—ANTI-FIGHTER BARRAGE: If this is the first round of a space combat, the players may simultaneously use the “Anti-Fighter Barrage” ability of any of their units in the active system.
        <ul>
          <li>If one or both players no longer have ships in the active system after resolving this step, the space combat ends immediately.</li>
          <li>Players cannot resolve “Anti-Fighter Barrage” abilities during any rounds of space combat other than the first round.</li>
        </ul>
      </RuleText>
      <RuleText number='67.4'>STEP 2—ANNOUNCE RETREATS: Each player may announce a retreat, beginning with the defender.
        <ul>
          <li>A retreat will not occur immediately; the units will retreat during the “Retreat” step.</li>
          <li>If the defender announces a retreat, the attacker cannot announce a retreat during that combat round.</li>
          <li>A player cannot announce a retreat if there is not at least one eligible system to retreat to.</li>
        </ul>
      </RuleText>
      <RuleText number='67.5'>STEP 3—ROLL DICE: Each player rolls one die for each ship he has in the active system; this is called a combat roll. If a unit’s combat roll produces a result that is equal to or greater than that unit’s combat value, that result produces a hit.
        <ul>
          <li>If a unit’s combat value contains two or more burst icons, the player rolls one die for each burst icon instead.</li>
          <li>If a player has ships that have different combat values in the active system, he rolls these dice separately.</li>
          <ul className='RuleText__ul-hyphen'>
            <li>First, he should roll all dice for his units with a combat value of “1.” Then, he should roll all dice for his units with combat value of “2,” and then “3,” continuing in numerical order until he has rolled dice for each of his ships.</li>
            <li>A player keeps track of the number of hits his combat rolls produce. The total number of hits he produces will destroy units during the “Assign Hits” step.</li>
            <li>If a player has an ability that rerolls a die or affects a die after it is rolled, he must resolve that ability immediately after rolling the die. For example, if the player made a combat roll for his dreadnoughts, he must decide if he wants to use an ability to reroll those dice before making a combat roll for his destroyers.</li>
            <li>The attacker makes all of his combat rolls during this step before the defender. This procedure is important for abilities that allow a player to reroll an opponent’s die.</li>
          </ul>
        </ul>
      </RuleText>
      <RuleText number='67.6'>STEP 4—ASSIGN HITS: Each player must choose and destroy one of his ships in the active system for each hit his opponent produced.
        <ul>
          <li>Before assigning hits, players may use their units’ “Sustain Damage” abilities to cancel hits.</li>
          <li>When a unit is destroyed, the player who controls that unit removes it from the board and places it in his reinforcements.</li>
        </ul>
      </RuleText>
      <RuleText number='67.7'>STEP 5—RETREAT: If a player announced a retreat during the first step of a combat, and there is still an eligible system for his units to retreat to, he must retreat.
        <ul>
          <li>If a player announced a retreat during the “Announce Retreats” step and if his opponent has no ships left in the system, the combat immediately ends and the retreat does not occur.</li>
          <li>To retreat, a player takes all of his ships in the combat that have a move value and moves them to an adjacent system. That player’s fighters and ground forces in the space area of the active system that are unable to move or be transported are destroyed.</li>
          <li>The system that a player’s units retreat to must contain one or more of his units, a planet he controls, or both. Additionally, the system cannot contain ships controlled by another player.</li>
          <li>If any units successfully retreat and are moved into an adjacent system, the player must place a command token from his reinforcements in the system to which he retreated. If that system already contains one of his command tokens, he does not place an additional token there. If the player has no command tokens in his reinforcements, he must use one from his command sheet instead.</li>
        </ul>
      </RuleText>
      <RuleText number='67.8'>After the “Retreat” step, if both players still have ships in the active system, they resolve another round of space combat beginning with the “Announce Retreats” step.</RuleText>
      <RuleText number='67.9'>Space combat ends immediately when only one player—or neither player—has a ship in the space area of the in the active system.
        <ul>
          <li>“End of combat” and “end of combat round” effects still occur.</li>
        </ul>
      </RuleText>
      <RuleText number='67.10'>After a combat ends, the player with one or more ships remaining in the system is the winner of the combat; the other player is the loser of the combat. If neither player has a ship remaining, the combat ends in a draw and there is no winner.
        <ul>
          <li>If the winner of the combat has fighters or ground forces in space that exceed his ships’ capacity in the active system, he must destroy the excess units of his choice.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='68'
      title='Space Dock'
      related={['Construction', 'Producing Units', 'Structures']}>
      <RuleText>A space dock is a structure that allows players to produce units.</RuleText>
      <RuleText number='68.1'>Each space dock has a “Production” ability that indicates the number of units it can produce.</RuleText>
      <RuleText number='68.2'>The primary way in which players acquire space docks is by resolving either the primary or secondary abilities of the “Construction” strategy card.</RuleText>
      <RuleText number='68.3'>Space docks are placed on planets. Each planet can have a maximum of one space dock.</RuleText>
      <RuleText number='68.4'>If a player’s space dock is ever on a planet that contains a unit that belongs to another player and does not contain any of his own ground forces, that space dock is destroyed.
        <ul>
          <li>The Clan of Saar’s “Floating Factory” faction-specific space dock is destroyed when it is blockaded; that is to say, when it is in a system with another player’s ships and none of the Clan of Saar’s ships.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='69'
      title='Speaker'
      related={['Agenda Card', 'Agenda Phase', 'Objective Cards', 'Politics', 'Strategy Phase']}>
      <RuleText>The speaker is the player who has the speaker token.</RuleText>
      <RuleText number='69.1'>During the strategy phase, the speaker is the first player to choose a strategy card.</RuleText>
      <RuleText number='69.2'>During the agenda phase, the speaker reveals the top agenda card from the agenda deck before each vote. The speaker is always the last player to vote and decides which outcome to resolve if the outcomes are tied.</RuleText>
      <RuleText number='69.3'>During setup, the speaker prepares the objectives.</RuleText>
      <RuleText number='69.4'>During the status phase, the speaker reveals a public objective.</RuleText>
      <RuleText number='69.5'>A random player gains the speaker token during setup before the game begins.</RuleText>
      <RuleText number='69.6'>During the action phase, if a player resolves the primary ability on the “Politics” strategy card, he chooses any player other than the current speaker to gain the speaker token.</RuleText>
      <RuleText number='69.7'>If the speaker is eliminated from the game, the speaker token is passed to the player to his left.</RuleText>
    </RuleSection>

    <RuleSection
      number='70'
      title='Status Phase'
      related={['Action Cards', 'Agenda Phase', 'Custodians Token', 'Command Tokens', 'Game Round', 'Objective Cards', 'Readied', 'Sustain Damage', 'Strategy Card', 'Strategy Phase']}>
      <RuleText>During the status phase, players score objectives and prepare for the next game round. To resolve the status phase, players perform the following steps:</RuleText>
      <RuleText number='70.1'>STEP 1—SCORE OBJECTIVES: Following initiative order, each player may score up to one public objective and one secret objective that can be fulfilled during the status phase. To score an objective, he must fulfill the requirements on the card; if he does, he gains a number of victory points indicated on the card.</RuleText>
      <RuleText number='70.2'>STEP 2—REVEAL PUBLIC OBJECTIVE: The speaker reveals an unrevealed public objective card by flipping that card faceup.
        <ul>
          <li>The speaker cannot reveal “Stage II” objectives until all “Stage I” objectives are revealed.</li>
          <li>The game ends if there are no unrevealed public objectives at the start of this step.</li>
        </ul>
      </RuleText>
      <RuleText number='70.3'>STEP 3—DRAW ACTION CARDS: Following initiative order, each player draws one action card.</RuleText>
      <RuleText number='70.4'>STEP 4—REMOVE COMMAND TOKENS: Each player removes all of his command tokens from the game board and returns them to his reinforcements.</RuleText>
      <RuleText number='70.5'>STEP 5—GAIN AND REDISTRIBUTE COMMAND TOKENS: Each player gains two command tokens from his reinforcements. Then, he can redistribute all of the command tokens on his command sheet, including the two he just gained, among his strategy, tactic, and fleet pools.
        <ul>
          <li>Players should remember to check the number of their ships in each system after reducing the size of their fleet pools.</li>
          <li>This step can usually be resolved simultaneously, but if there is a timing conflict, it is resolved in initiative order.</li>
        </ul>
      </RuleText>
      <RuleText number='70.6'>STEP 6—READY CARDS: Each player readies all of his exhausted cards, including strategy cards.</RuleText>
      <RuleText number='70.7'>STEP 7—REPAIR UNITS: Each player repairs all of his units that have the “Sustain Damage” ability by turning those units upright.</RuleText>
      <RuleText number='70.8'>STEP 8—RETURN STRATEGY CARDS: Each player returns his strategy card to the common play area. Then, if a player has removed the custodians token from Mecatol Rex, the game round continues to the agenda phase. Otherwise, a new game round begins with the strategy phase.</RuleText>
    </RuleSection>


    <RuleSection
      number='71'
      title='Strategic Action'
      related={['Action Phase', 'Objective Cards', 'Strategy Card', 'Victory Points']}>
      <RuleText>During the action phase, the active player may perform a strategic action to resolve the primary ability on his strategy card.</RuleText>
      <RuleText number='71.1'>After the active player resolves the primary ability on his strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may resolve that strategy card’s secondary ability.
        <ul>
          <li>Players do not have to resolve the secondary abilities of the active player’s strategy card.</li>
        </ul>
      </RuleText>
      <RuleText number='71.2'>After each player has had an opportunity to resolve a strategy card’s secondary ability, the active player exhausts his strategy card so that it is facedown—this indicates that he cannot use this card again this round and is a reminder that he can now pass during one of his later turns.
        <ul>
          <li>During three- and four-player games, a player must resolve strategic actions using both of his chosen strategy cards before he can pass.</li>
        </ul>
      </RuleText>
      <RuleText>71.3 When a player is resolving either the primary or secondary abilities from a strategy card, he resolves each of the ability’s effects from top to bottom.</RuleText>
    </RuleSection>

    <RuleSection
      number='72'
      title='Strategy Card'
      related={['Construction', 'Diplomacy', 'Initiative Order', 'Imperial', 'Leadership', 'Politics', 'Strategy Phase', 'Technology (Strategy Card)', 'Trade', 'Warfare']}>
      <RuleText>Strategy cards determine initiative order and provide each player with a powerful ability that he can use one time during the action phase.</RuleText>
      <RuleText number='72.1'>During the strategy phase, each player chooses a strategy card from the common play area and places it in his play area faceup.</RuleText>
      <RuleText number='72.2'>Each strategy card has a readied and an exhausted side.
        <ul>
          <li>The readied side contains the strategy card’s name, initiative number, and abilities.</li>
          <li>The exhausted side contains the strategy card’s initiative number.</li>
        </ul>
      </RuleText>
      <RuleText number='72.3'>A player can only resolve the primary ability of his own strategy cards.</RuleText>
      <RuleText number='72.4'>A player can only resolve the secondary ability of strategy cards that were chosen by other players.</RuleText>
      <RuleText number='72.5'>There are eight strategy cards, each of which has a name and an initiative number.</RuleText>
      <RuleText number='72.6'>The initiative number on a player’s strategy card determines the initiative order for the action phase and status phase.</RuleText>
      <RuleText number='72.7'>A strategy card has both a primary ability and a secondary ability. These abilities are resolved during a strategic action.</RuleText>
      <RuleText number='72.8'>Each strategy card exists in either the common play area or a player’s play area.
        <ul>
          <li>Strategy cards in the common play area are available for players to choose during the strategy phase.</li>
          <li>A strategy card in a player’s play area belongs to that player until it is returned to the common play area during the status phase.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='73'
      title='Strategy Phase'
      related={['Game Round', 'Speaker', 'Strategy Card', 'Trade Goods']}>
      <RuleText>During the strategy phase, each player chooses a strategy card to use during the round.</RuleText>
      <RuleText>To resolve the strategy phase, players perform the following steps:</RuleText>
      <RuleText number='73.1'>STEP 1—Starting with the speaker and proceeding clockwise, each player chooses one of the strategy cards from the common play area and places it faceup in his play area.
        <ul>
          <li>If there are one or more trade good tokens on a strategy card when a player chooses it, he gains those trade goods.</li>
          <li>A player cannot choose a strategy card that another player has already chosen during the current strategy phase.</li>
          <li>When playing with three or four players, each player will choose a second strategy card. After the last player has received his first strategy card, each player chooses a second strategy card, starting with the speaker and proceeding clockwise.</li>
        </ul>
      </RuleText>
      <RuleText number='73.2'>STEP 2—The speaker places one trade good token from the supply on each strategy card that was not chosen.
        <ul>
          <li>During a four-player game, all strategy cards will be chosen, and therefore no trade good tokens will be placed on strategy cards.</li>
        </ul>
      </RuleText>
      <RuleText>Then, players proceed to the action phase.</RuleText>
    </RuleSection>

    <RuleSection
      number='74'
      title='Structures'
      related={['Construction', 'PDS', 'Units', 'Space Dock']}>
      <RuleText>A structure is a type of unit. PDS units and space docks are structures.</RuleText>
      <RuleText number='74.1'>Structures are always placed on planets.
        <ul>
          <li>The Clan of Saar’s “Floating Factory” faction-specific space dock is placed in a system’s space area</li>
        </ul>
      </RuleText>
      <RuleText number='74.2'>Structures are primarily placed on planets using the “Construction” strategy card.</RuleText>
      <RuleText number='74.3'>Structures cannot move or be transported.</RuleText>
      <RuleText number='74.4'>A player can have a maximum of one space dock on each planet.</RuleText>
      <RuleText number='74.5'>A player can have a maximum of two PDS units on each planet.</RuleText>
    </RuleSection>

    <RuleSection
      number='75'
      title='Supernova'
      related={['Anomalies', 'Movement']}>
      <RuleText>A supernova is an anomaly that affects movement.</RuleText>
      <RuleText number='75.1'>A ship cannot move through or into a supernova.</RuleText>
    </RuleSection>

    <RuleSection
      number='76'
      title='Sustain Damage (Unit Ability)'
      related={['Abilities', 'Ground Combat', 'Space Combat']}>
      <RuleText>Some units have the “Sustain Damage” ability. Immediately before a player assigns damage to his units, he can use the “Sustain Damage” ability of any of his units in the active system.</RuleText>
      <RuleText number='76.1'>For each “Sustain Damage” ability that a player uses, one hit produced by another player’s units is canceled. Then, each unit using this ability is placed on its side to indicate that it is damaged.</RuleText>
      <RuleText number='76.2'>A damaged unit does not have reduced capabilities and is functionally the same as an undamaged unit, except that it cannot use the “Sustain Damage” ability.</RuleText>
      <RuleText number='76.3'>A damaged unit cannot use the “Sustain Damage” ability until it is repaired during the status phase or by another game effect.</RuleText>
      <RuleText number='76.4'>A unit can use its “Sustain Damage” ability any time a hit is produced against it. This includes hits produced during combat and from unit abilities such as the “Space Cannon” ability.
        <ul>
          <li>A unit can only use the “Sustain Damage” ability if it is eligible to be hit. For example, a player cannot use a dreadnought’s “Sustain Damage” ability to cancel a hit from “Anti-Fighter Barrage.”</li>
        </ul>
      </RuleText>
      <RuleText number='76.5'>The “Sustain Damage” ability cannot be used to cancel an effect that directly destroys a unit.</RuleText>
      <RuleText number='76.6'>The Barony of Letnev’s “Non-Euclidean Shielding” faction technology allows the Letnev player’s units with the “Sustain Damage” ability to cancel up to two hits instead of one.</RuleText>
    </RuleSection>

    <RuleSection
      number='77'
      title='System Tiles'
      related={['Adjacency', 'Anomalies', 'Planets', 'Ships', 'Wormholes']}>
      <RuleText>A system tile represents an area of the galaxy. Players place system tiles during setup to create the game board.</RuleText>
      <RuleText number='77.1'>The back of each system tile is colored green, blue, or red.</RuleText>
      <RuleText number='77.2'>System tiles with a green-colored back are home systems. Each home system is unique to one of the game’s factions.</RuleText>
      <RuleText number='77.3'>System tiles with a blue-colored back each contain one or more planets.</RuleText>
      <RuleText number='77.4'>System tiles with a red-colored back are anomalies or are systems that do not contain planets.</RuleText>
      <RuleText number='77.5'>Planets are located in systems. Ground forces and structures are always placed on planets.</RuleText>
      <RuleText number='77.6'>Any area on a system tile that is not a planet is space. Ships are always placed in the space area.</RuleText>
    </RuleSection>

    <RuleSection
      number='78'
      title='Tactical Action'
      related={['Action Phase', 'Active System', 'Anti-Fighter Barrage', 'Bombardment', 'Command Sheet', 'Ground Combat', 'Invasion', 'Movement', 'Producing Units', 'Transport', 'Space Cannon', 'Space Combat']}>
      <RuleText>The tactical action is the primary method by which players produce units, move ships, and extend their dominion within the galaxy. To perform a tactical action, the active player performs the following steps:</RuleText>
      <RuleText number='78.1'>STEP 1—ACTIVATION: The active player must activate a system that does not contain one of his command tokens.
        <ul>
          <li>To activate a system, the active player places a command token from his tactic pool on that system. That system is the active system.</li>
          <li>Other players’ command tokens do not prevent a player from activating a system.</li>
        </ul>
      </RuleText>
      <RuleText number='78.2'>STEP 2—MOVEMENT: The active player may move any number of ships with a sufficient move value from any number of systems that do not contain one of his command tokens into the active system, following the rules for movement.
        <ul>
          <li>Ships that have capacity values can transport ground forces and fighters when moving.</li>
          <li>The player may choose to not move any ships.</li>
          <li>After the “Move Ships” step, all players can use the “Space Cannon” abilities of their units in the active system.</li>
        </ul>
      </RuleText>
      <RuleText number='78.3'>STEP 3—SPACE COMBAT: If two players have ships in the active system, those players must resolve a space combat.
        <ul>
          <li>If the active player is the only player with ships in the system, he skips this step.</li>
        </ul>
      </RuleText>
      <RuleText number='78.4'>STEP 4—INVASION: The active player may use his “Bombardment” abilities, commit units to land on planets, and resolve ground combat against other players’ units.</RuleText>
      <RuleText number='78.5'>STEP 5—PRODUCTION: The active player may resolve the “Production” abilities of his units in the active system.
        <ul>
          <li>The active player may do this even if he did not move units or land ground forces during this tactical action.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='79'
      title='Technology'
      related={['Command Tokens', 'Exhausted', 'Initiative Order', 'Resources', 'Strategic Action', 'Strategy Card', 'Technology (Strategy Card)', 'Unit Upgrades']}>
      <RuleText>Technology cards allow players to upgrade units and acquire powerful abilities.</RuleText>
      <RuleText number='79.1'>Each player places any technologies he has gained faceup near his faction sheet. He owns those cards for the duration of the game and can use their abilities.</RuleText>
      <RuleText number='79.2'>A player does not own the technology cards in his technology deck.</RuleText>
      <RuleText number='79.3'>A player can gain technology cards from his technology deck by researching technology.
        <ul>
          <li>Both the primary and secondary abilities of the “Technology” strategy card allow a player to research a technology.</li>
        </ul>
      </RuleText>
      <RuleText number='79.4'>Any technology cards that a player has not gained remain in his technology deck. A player can look through his technology deck at any time.</RuleText>
      <RuleText number='79.5'>If an ability instructs a player to gain a technology, he does not research it; he takes it from his technology deck and places it in his play area, ignoring prerequisites.</RuleText>
      <RuleText number='79.6'>Some technologies are unit upgrades. Unit upgrades share a name with a unit that is printed on a player’s faction sheet.
        <ul>
          <li>Players place any unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.</li>
        </ul>
      </RuleText>
      <RuleText number='79.7'>Each technology that is not a unit upgrade has a colored symbol displayed in the lower-right corner of the card and on its card back that indicates that technology’s color.
        <ul>
          <li>A technology’s color has no inherent game effect; however, each technology a player owns can satisfy a prerequisite of a matching color when researching other technology.</li>
          <li>Unit upgrades do not have a color and do not satisfy prerequisites.</li>
          <li>There are four colors of technologies as follows:</li>
        </ul>
        <RuleImageBlock images={[
          { path: '/images/tech-biotic.png', label: 'Biotic' },
          { path: '/images/tech-warfare.png', label: 'Warfare' },
          { path: '/images/tech-propulsion.png', label: 'Propulsion' },
          { path: '/images/tech-cybernetic.png', label: 'Cybernetic' },
        ]} />
      </RuleText>
      <RuleText number='79.8'>Most technology cards have a column of colored symbols displayed in the lower-left corner of the card. Each symbol in this column is a prerequisite.
        <ul>
          <li>A technology card’s prerequisites indicate the number and color of technologies a player must own to research that technology card.</li>
        </ul>
      </RuleText>
      <RuleText number='79.9' subheading='Researching Technology'> A player can research technology by resolving either the primary or secondary ability of the “Technology” strategy card during the action phase. Other game effects may also instruct a player to research technology.</RuleText>
      <RuleText number='79.10'>To research technology, a player gains that technology card from his technology deck and places it in his play area near his faction sheet.
        <ul>
          <li>Players place any unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.</li>
        </ul>
      </RuleText>
      <RuleText number='79.11'>A player cannot research a faction technology that does not match his faction.</RuleText>
      <RuleText number='79.12'>When researching technology, a player must satisfy each of a technology’s prerequisites to research it. To satisfy a technology’s prerequisites, he must own one technology of the matching color for each prerequisite symbol on the technology card he wishes to research.
        <ul>
          <li>Prerequisites symbols are displayed as symbols on the lower-left corner of the card.</li>
          <li>Unit upgrade technologies do not have a color and do not satisfy prerequisites.</li>
          <li>Players may use certain abilities or technology specialties to ignore some prerequisites.</li>
        </ul>
      </RuleText>
      <RuleText number='79.13' subheading='Technology Specialties'> A technology specialty is a technology symbol found on some planets.</RuleText>
      <RuleText number='79.14'>When researching technology, a player can exhaust a planet he controls that has a technology specialty to ignore one prerequisite symbol of the matching type on the technology card he is researching.</RuleText>
      <RuleText number='79.15'>If the planet card is already exhausted, it cannot be used to ignore a prerequisite.</RuleText>
      <RuleText number='79.16' subheading='Valefar Assimilator'>The Nekro Virus faction can use its faction abilities in combination with its two “Valefar Assimilator” faction technologies to gain faction technologies that have been researched by other players, including unit upgrades.</RuleText>
      <RuleText number='79.17'>Basic units printed on faction sheets are not technologies and are not eligible targets for “Valefar Assimilator.”</RuleText>
      <RuleText number='79.18'>If a player is eliminated while one of his technologies has a Valefar Assimilator token on it, the Nekro Virus player places that technology in his play area; it is not removed from the game.</RuleText>
      <RuleText number='79.19'>If a Valefar Assimilator token is removed from the Saar “Floating Factory” unit upgrade, each of the Nekro Virus’ space docks must be placed on an eligible planet he controls in that space dock’s system, or the space dock is returned to his reinforcements.</RuleText>
      <RuleText number='79.20'>If a Valefar Assimilator token is removed from a war sun unit upgrade and the Nekro Virus does not have the standard war sun unit upgrade, each of Nekro Virus’ war suns are returned to his reinforcements.</RuleText>
      <RuleText number='79.21'>The Nekro Virus may upgrade his units with units of the same type (e.g., “dreadnought” or “infantry”) even if their names do not match. If the Nekro Virus gains a unit upgrade technology of the same unit type as a unit upgrade technology he already has, the previous upgrade is removed, and he must use the same Valefar Assimilator token as was used to copy the previous upgrade.</RuleText>
      <RuleText number='79.22'>When a Valefar Assimilator token is on a technology, that technology’s color and type count toward objectives.</RuleText>
    </RuleSection>

    <RuleSection
      number='80'
      title='Technology (Strategy Card)'
      related={['Initiative Order', 'Resources', 'Strategic Action', 'Strategy Card', 'Technology']}>
      <RuleText>The “Technology” strategy card allows players to research new technology. This card’s initiative value is “7.”</RuleText>
      <RuleText number='80.1'>During the action phase, if the active player has the “Technology” strategy card, he can perform a strategic action to resolve that card’s primary ability.</RuleText>
      <RuleText number='80.2'>To resolve the primary ability on the “Technology” strategy card, the active player can research one technology of his choice. Then, he may spend six resources to research one additional technology of his choice.</RuleText>
      <RuleText number='80.3'>After the active player resolves the primary ability of the “Technology” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from his strategy pool and four resources to research one technology of his choice.</RuleText>
    </RuleSection>

    <RuleSection
      number='81'
      title='Trade (Strategy Card)'
      related={['Command Tokens', 'Commodities', 'Initiative Order', 'Strategic Action', 'Strategy Card', 'Trade Goods']}>
      <RuleText>The “Trade” strategy card allows players to gain trade goods and replenish commodities. This card’s initiative value is “5.”</RuleText>
      <RuleText number='81.1'>During the action phase, if the active player has the “Trade” strategy card, he can perform a strategic action to resolve that card’s primary ability. To resolve the primary ability on the “Trade” strategy card, the active player resolves the following effects in order:</RuleText>
      <RuleText number='81.2'>STEP 1—The active player gains 3 trade goods.</RuleText>
      <RuleText number='81.3'>STEP 2—The active player replenishes his commodities by taking the number of commodity tokens necessary so that he has an amount equal to the commodity value on his faction sheet. Then, he places those tokens in the commodity area of his faction sheet.
        <ul>
          <li>A player cannot have more commodities than the commodity value printed on his faction sheet.</li>
        </ul>
      </RuleText>
      <RuleText number='81.4'>STEP 3—The active player chooses any number of other players. Those players use the secondary ability of this card without spending a command token.
        <ul>
          <li>The chosen players must resolve secondary ability of this card without spending a command token after the active player finishes resolving the primary ability.</li>
          <li>The chosen players can only use the secondary ability once, and they cannot use it by spending command tokens.</li>
        </ul>
      </RuleText>
      <RuleText number='81.5'>After the active player resolves the primary ability of the “Trade” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from his strategy pool to replenish his commodities.</RuleText>
    </RuleSection>

    <RuleSection
      number='82'
      title='Trade Goods'
      related={['Commodities', 'Deals', 'Influence', 'Resources', 'Transactions']}>
      <RuleText>A trade good represents a player’s buying and trading power beyond his planet’s raw resources.</RuleText>
      <RuleText number='82.1'>Trade goods and commodities are represented by opposite sides of the same token.</RuleText>
      <RuleText number='82.2'>When a player gains a trade good, he takes a trade good token from the supply and places it on the trade good area on his command sheet, making sure the trade good side is faceup.</RuleText>
      <RuleText number='82.3'>A player can spend trade goods at any time during the game.</RuleText>
      <RuleText number='82.4'>A player can spend a trade good in one of the following ways:
        <ul>
          <li>In place of spending one resource.</li>
          <li>In place of spending one influence. However, trade goods cannot be spent to cast votes during the agenda phase.</li>
          <li>To resolve an effect that specifically requires that a trade good be spent.</li>
        </ul>
      </RuleText>
      <RuleText number='82.5'>A player can exchange his trade goods with other players during a transaction.</RuleText>
      <RuleText number='82.6'>When a player receives a commodity token from another player, the player who received that token places it in his trade good area with the trade good side of the token faceup.
        <ul>
          <li>That token is no longer a commodity token; it is a trade good token.</li>
        </ul>
      </RuleText>
      <RuleText number='82.7'>Trade good tokens come in values of one and three. A player can swap between these tokens as necessary.</RuleText>
    </RuleSection>

    <RuleSection
      number='83'
      title='Transactions'
      related={['Commodities', 'Deals', 'Neighbors', 'Promissory Notes', 'Trade Goods']}>
      <RuleText>A transaction is a way for a player to exchange commodities, trade goods, and promissory notes.</RuleText>
      <RuleText number='83.1'>During the active player’s turn, he may resolve up to one transaction with each of his neighbors.
        <ul>
          <li>A player can resolve a transaction at any time during his turn, even during a combat.</li>
        </ul>
      </RuleText>
      <RuleText number='83.2'>To resolve a transaction, a player gives any number of trade goods and commodities and up to one promissory note to a neighbor in exchange for any number of trade goods and commodities and up to one promissory note.</RuleText>
      <RuleText number='83.3'>Players can exchange commodities, trade goods and promissory notes, but cannot exchange other types of cards or tokens.
        <ul>
          <li>The Emirates of Hacan can also exchange action cards with other players as part a transactions.</li>
        </ul>
      </RuleText>
      <RuleText number='83.4'>A transaction does not have to be even. A player may exchange components of unequal value or give components without receiving something in return.
        <ul>
          <li>The players agree on the terms of the transaction before exchanging any components. After the components are traded, the transaction cannot be undone.</li>
        </ul>
      </RuleText>
      <RuleText number='83.5'>Players can resolve a transaction as part of a deal.</RuleText>
      <RuleText number='83.6'>While resolving each agenda during the agenda phase, a player may perform one transaction with each other player, even if those players are not his neighbors.</RuleText>
    </RuleSection>

    <RuleSection
      number='84'
      title='Transport'
      related={['Capacity', 'Invasion', 'Movement', 'Tactical Action']}>
      <RuleText>When a ship moves, it may transport any combination of fighters and ground forces, but the number of units it transports cannot exceed that ship’s capacity value.</RuleText>
      <RuleText number='84.1'>The ship can pick up and transport fighters and ground forces when it moves. During a tactical action, it can pick up and transport units from the active system, the system it started its movement in, and each system it moves through.
        <ul>
          <li>These transported units can only be dropped off in the active system.</li>
          <li>These transported units remain with the transporting ship until it is finished moving.</li>
          <li>Units being transported by a ship that is removed from the board by a gravity rift are also removed from the board.</li>
        </ul>
      </RuleText>
      <RuleText number='84.2'>Any fighters and ground forces that a ship transports must move with the ship and remain in the space area of a system.</RuleText>
      <RuleText number='84.3'>Fighters and ground forces cannot be picked up from a system that contains one of their faction’s command tokens other than the active system.</RuleText>
      <RuleText number='84.4'>A player can land ground forces on a planet in a system during the “Invasion” step of a tactical action.</RuleText>
    </RuleSection>

    <RuleSection
      number='85'
      title='Units'
      related={['Ground Forces', 'Ships', 'Structures']}>
      <RuleText>A unit is represented by a plastic figure.</RuleText>
      <RuleText number='85.1'>There are three types of units: ships, structures.</RuleText>
      <RuleText number='85.2'>Each color of plastic comes with the ground forces, and following units: 12 Infantry, 10 Fighters, 4 Carriers, 5 Dreadnoughts, 1 Flagship, 3 Space Docks, 6 PDS units, 8 Destroyers, 8 Cruisers, 2 War Suns</RuleText>
      <RuleText number='85.3'>Units exist either on the game board or in a player’s reinforcements.</RuleText>
    </RuleSection>

    <RuleSection
      number='86'
      title='Unit Upgrades'
      related={['Technology']}>
      <RuleText>A unit upgrade is a type of technology card.</RuleText>
      <RuleText number='86.1'>Unit upgrades share a name with a unit that is printed on a player’s faction sheet, but have a higher roman numeral. For example, a player’s “Carrier I” unit is upgraded by the unit upgrade technology “Carrier II.
        <ul>
          <li>See “Technology” for rules regarding the Nekro Virus and unit upgrades.</li>
        </ul>
      </RuleText>
      <RuleText number='86.2'>Players place unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.</RuleText>
      <RuleText number='86.3'>The white arrows next to an attribute on a faction sheet indicate that the attribute will improve when the unit is upgraded.</RuleText>
      <RuleText number='86.4'>After a player gains a unit upgrade card, each of that player’s units that correspond to that upgrade card is treated as having the attributes and abilities printed on that upgrade card. Any previous attributes of that unit, such as the one printed on that player’s faction sheet, are ignored.</RuleText>
    </RuleSection>

    <RuleSection
      number='87'
      title='Victory Points'
      related={['Agenda Card', 'Imperial', 'Objective Cards']}>
      <RuleText>The first player to gain 10 victory points wins the game.</RuleText>
      <RuleText number='87.1'>Players gain victory points in a variety of ways. A common way that a player can gain victory points is by scoring objectives.</RuleText>
      <RuleText number='87.2'>Each player uses the victory point track to indicate how many victory points he has gained.
        <ul>
          <li>If the players are using the 14-space side of the victory point track, the game ends and a player wins when he has 14 victory points instead of 10.</li>
        </ul>
      </RuleText>
      <RuleText number='87.3'>Each player places one of his control tokens on space “0” of the victory point track during setup.</RuleText>
      <RuleText number='87.4'>When a player gains a victory point, he advances his control token a number of spaces along the victory point track equal to the number of victory points he gained.
        <ul>
          <li>A player’s control token must always be on the space of the victory point track that shows a number that matches the number of victory points he has gained during the game. A player cannot have more than 10 victory points.</li>
        </ul>
      </RuleText>
      <RuleText number='87.5'>If an ability refers to the player with the “most” or “fewest” victory points, and more than one player is tied in that respect, the effect applies to all of the tied players.</RuleText>
      <RuleText number='87.6'>If a player gains a victory point from a law, and that law is discarded, he does not lose that victory point.</RuleText>
      <RuleText number='87.7'>The game ends immediately when one player has 10 victory points. If multiple players would simultaneously gain their 10th victory point, the player who is earliest in initiative order among those players is the winner; if this occurs when players do not have strategy cards, the player who is nearest the speaker (including the speaker) in clockwise order is the winner.</RuleText>
      <RuleText number='87.8'>If the game ends because the speaker cannot reveal an objective card, the player with the most victory points is the winner. If one or more players are tied for having the most victory points, the tied player who is first in initiative order is the winner.</RuleText>
    </RuleSection>

    <RuleSection
      number='88'
      title='Warfare (Strategy Card)'
      related={['Action Phase', 'Command Tokens', 'Initiative Order', 'Strategy Card', 'Strategic Action']}>
      <RuleText>The “Warfare” strategy card allows a player to remove a command token from the board and redistribute the command tokens in his command pools. This card’s initiative value is “6.” During the action phase, if the active player has the “Warfare” strategy card, he can perform a strategic action to resolve that card’s primary ability.</RuleText>
      <RuleText>To resolve the primary ability on the “Warfare” strategy card, the active player performs the following steps:</RuleText>
      <RuleText number='88.1'>STEP 1—The active player removes any one of his command tokens from the game board. Then, he gains that command token by placing it in one of the pools of his command sheet.</RuleText>
      <RuleText number='88.2'>STEP 2—The active player can redistribute the command tokens among the pools on his command sheet.</RuleText>
      <RuleText number='88.3'>After the active player resolves the primary ability of the “Warfare” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from his strategy pool to resolve the “Production” ability of one space dock in his home system.
        <ul>
          <li>The command token is not placed in his home system.</li>
        </ul>
      </RuleText>
    </RuleSection>

    <RuleSection
      number='89'
      title='Wormholes'
      related={['Adjacency', 'Movement', 'Neighbors', 'System Tiles']}>
      <RuleText>Some systems contain wormholes. Systems that contain identical wormholes are adjacent.</RuleText>
      <RuleText number='89.1'>There are two basic types of wormholes: alpha and beta.</RuleText>
      <RuleText number='89.2'>PDS units that have been upgraded by the “PDS II—Deep Space Cannon” unit upgrade technology can use their “Space Cannon” abilities through wormholes.</RuleText>
      <RuleText number='89.3'>Players can be neighbors and perform transactions through wormholes.</RuleText>
      <RuleText number='89.4'>There is one advanced type of wormhole: delta. This wormhole follows all normal wormhole rules.
        <ul>
          <li>This wormhole is present on the Creuss Gate system tile and the Ghosts of Creuss home system tile.</li>
        </ul>
      </RuleText>
    </RuleSection>
  </SearchFilter>
);