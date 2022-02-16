import * as React from 'react';
import { RuleSection } from './RuleComponents';

const Errata = ({ children }) => (
  <span className='FAQ__errata'>{children}</span>
);

const Question = ({ children }) => (
  <p className='FAQ__question'><strong>Q:</strong> {children}</p>
)

const Answer = ({ children }) => (
  <p className='FAQ__answer'><strong>A:</strong> {children}</p>
)

export default () => (
  <div className='container'>
    <h2>Errata</h2>
    <RuleSection title='Bribery (Action Card)'>
      <p>The text of the action card “Bribery” should read as follows: “After the speaker votes on an agenda: Spend any number of trade goods. For each trade good spent, cast 1 additional vote for <Errata>the outcome on which you voted.</Errata>”</p>
    </RuleSection>
    
    <RuleSection title='Devotion (Yin Brotherhood)'>
      <p>The text of the Yin Brotherhood’s “Devotion” faction ability should read as follows: “After each space battle round, you may destroy 1 of your cruisers or destroyers <Errata>in the active system</Errata> to produce 1 hit and assign it to 1 of your opponent’s ships <Errata>in that system.</Errata>”</p>
    </RuleSection>

    <RuleSection title='Diplomacy (Strategy Card)'>
      <p>The text of the “Diplomacy” strategy card’s secondary ability should read as follows: “Spend 1 token from your strategy pool to ready up to 2 exhausted planets <Errata>you control</Errata>.”</p>
    </RuleSection>

    <RuleSection title='Direct Hit (Action Card)'>
      <p>The text of the “Direct Hit” action card should read as follows: “After another player’s ship uses ‘Sustain Damage’ to cancel a hit produced by your units <Errata>or abilities</Errata>: Destroy that ship.”</p>
    </RuleSection>

    <RuleSection title='Harrow (L1Z1X Mindnet)'>
      <p>The text of the L1Z1X’s “Harrow” faction ability should read as follows: “<Errata>At the end of each round of ground combat,</Errata> your ships in the active system may use their bombardment abilities against your opponent’s ground forces on the planet.”</p>
    </RuleSection>

    <RuleSection title='Hegemonic Trade Policy (Winnu)'>
      <p>The text of the Winnu faction technology “Hegemonic Trade Policy” should read as follows: “Exhaust this card when 1 or more of your units use ‘Production’; swap the resource and influence values of 1 planet you control <Errata>during that use of ‘Production.’</Errata>”</p>
    </RuleSection>

    <RuleSection title='Hyper Metabolism (Technology)'>
      <p>The text of the “Hyper Metabolism” technology should read as follows: “During the status phase, gain <Errata>3</Errata> command tokens instead of <Errata>2</Errata>.”</p>
    </RuleSection>

    <RuleSection title='Matriarch (Naalu Collective)'>
      <p>The text of the Naalu flagship “Matriarch” should read as follows: “During an invasion in this system, you may commit fighters to planets as if they were ground forces. <Errata>When combat ends</Errata>, return those units to the space area.”</p>
    </RuleSection>

    <RuleSection title='Politcal Favor (Xxcha)'>
      <p>The text of the Xxcha promissory note “Political Favor” should read as follows: “<Errata>When</Errata> an agenda is revealed: Remove 1 token from the Xxcha player’s strategy pool and return it to his reinforcements. Then, discard the revealed agenda and reveal 1 agenda from the top of the deck. Players vote on this agenda instead. Then, return this card to the Xxcha player.”</p>
    </RuleSection>

    <RuleSection title='Unstable Planet (Action Card)'>
      <p>The text of the “Unstable Planet” action card should read as follows: “Action: Choose 1 hazardous planet. Exhaust that planet and destroy <Errata>up to</Errata> 3 infantry on it.”</p>
    </RuleSection>

    <RuleSection title='Veto (Action Card)'>
      <p>The text of the “Veto” action card should read as follows: “Action: <Errata>When</Errata> an agenda is revealed: Discard that agenda and reveal 1 agenda from the top of the deck. Players vote on this agenda instead.”</p>
    </RuleSection>

    <h2>FAQ</h2>
    <p>This section contains answers to frequently asked questions.</p>

    <RuleSection title='General'>
      <Question>Are the “0” faces of the ten-sided dice included with the game intended to represent the result of a “10”?</Question>
      <Answer>Yes, the “0” face is a “10” result.</Answer>
      <Question>How should a space combat be resolved if it is mathematically impossible for either side to win—for example, certain configurations of ships using the “Non-Euclidean Shielding” and “Duranium Armor” technologies in concert?</Question>
      <Answer>If neither side has the potential to win, the attacker must retreat.</Answer>
      <Question>Can fighters block ship movement?</Question>
      <Answer>Yes, fighters can block ship movement (this was added as a correction in the Living Rules Reference version 1.1).</Answer>
      <Question>Does each unit participating in Bombardment or Space Cannon roll an additional die for the Plasma Scoring technology?</Question>
      <Answer>No. “Plasma Scoring” only grants one additional die for each “Bombardment” or “Space Cannon” roll, and the unit benefitting from this technology must be decided before rolling.</Answer>
      <Question>Does “Planetary Shield” prevent the use of “X-89 Bacterial Weapon”?</Question>
      <Answer>No. “X-89 Bacterial Weapon” is not part of bombardment, so it is not prevented by “Planetary Shield.”</Answer>
      <Question>Can units be picked up and transported off of planets when using abilities that move ships, such as the “Skilled Retreat” action card or “Foresight” faction ability?</Question>
      <Answer>Yes. Any effect that moves a ship allows that ship to transport units in its system, if it has available capacity.</Answer>
      <Question>Can you intentionally reveal hidden information to another player, such as an action card from your hand or your secret objective?</Question>
      <Answer>Yes. This information is kept hidden by default, but it is permissible to reveal it to another player or players as a strategic option.</Answer>
      <Question>What happens to infantry that would be placed on a planet in any player’s home system by the effect of the “Infantry II” unit upgrade technology if the player does not own any planets in his home system?</Question>
      <Answer>When those infantry would be placed on a home planet, they are returned to that player’s reinforcements instead.</Answer>
      <Question>Can a card (such as a promissory note) with a specified timing of a certain window that is acquired from a transaction during that window be played immediately?</Question>
      <Answer>Yes. For example, a promissory note with “At the start of your turn:” timing may be immediately played if the transaction occurred within the “start of turn” timing window.</Answer>
      <Question>When the player resolving the “Trade” strategy card selects another player to resolve the “Trade” secondary ability for free, does the player resolving the effect for free do so during the execution of the primary ability or the secondary ability?</Question>
      <Answer>He <strong>must</strong> resolve this effect during the resolution of the secondary ability as normal, but he does not have to spend a command token to do so.</Answer>
      <Question>If a player would refresh his commodities but already has the maximum amount, can another player still play that player’s “Trade Agreement” promissory note against him?</Question>
      <Answer>Yes. Even if that player gains zero commodities when he refreshes them, his “Trade Agreement” may still be played against him.</Answer>
      <Question>Does the “Neural Motivator” technology give an additional action card for both the standard status phase draw as well as the “Minister of Policy” agenda? What about the Yssaril’s “Scheming” faction ability?</Question>
      <Answer>No. “Neural Motivator” gives only one action card in addition to the standard status phase draw. It is not triggered additional times by other abilities. The Yssaril’s “Schemeing” ability, however, is triggered each time that action cards are drawn.</Answer>
      <Question>Does the “Political Secret” promissory note disable passive/ mandatory faction abilities, such as the Barony of Letnev’s “Armada” faction ability, when it is used against that player?</Question>
      <Answer>No. The “Political Secret” promissory note only prevents the use of faction abilities that a player must choose to use.</Answer>
      <Question>Does the “Political Secret” promissory note prevent a player from using faction-specific technology?</Question>
      <Answer>No. The “Political Secret” promissory note does not prevent a player from using faction-specific technology, nor does it prevent the use of other abilities, such as those from agendas that a player might own.</Answer>
      <Question>Can the “Turn Their Fleets to Dust” objective be fulfilled by using a “Direct Hit” action card or by destroying a unit with capacity and allowing transported fighters to be removed as a result?</Question>
      <Answer>No. In both situations, the “Space Cannon” ability did not destroy the last ship in the system, so the objective is not fulfilled.</Answer>
      <Question>If a player has multiple planets with PDS that are being invaded in a single system, does the “Plasma Scoring” technology add one die to each planet’s space cannon roll or for only one planet’s space cannon roll?</Question>
      <Answer>The “Plasma Scoring” technology adds one die for each space planet’s “Space Cannon” roll.</Answer>
    </RuleSection>

    <RuleSection title='Production'>
      <Question>When an ability other than “Production” allows you to produce one or more units, do you have to pay for the units produced?</Question>
      <Answer>Yes, a unit that is produced must always be paid for.</Answer>
      <Question>When producing a unit with an ability other than “Production,” does the price reduction from the “Sarween Tools” technology apply?</Question>
      <Answer>No, “Sarween Tools” is only used with the “Production” ability.</Answer>
    </RuleSection>

    <RuleSection title='Agendas'>
      <Question>When a “Research Team” agenda that is attached to a planet is used to ignore a prerequisite, is the planet exhausted?</Question>
      <Answer>No. The agenda is exhausted to ignore the prerequisite, not the planet.</Answer>
      <Question>Can a player cast ‘0’ votes “For” or “Against” on an agenda instead of abstaining, in order to take advantage of effects associated with that option?</Question>
      <Answer>No. A vote of ‘0’ is the same as abstaining; that player gains no positive or negative effects of voting “For” or “Against” on an agenda if he contributed ‘0’ votes.</Answer>
      <Question>Does the “Enforced Travel Ban” agenda prevent “Space Cannon” usage through wormholes?</Question>
      <Answer>No. “Enforce Travel Ban” does not prevent “Space Cannon” usage.</Answer>
      <Question>If the “Classified Document Leaks” agenda is discarded, what happens?</Question>
      <Answer>The secret objective remains in play; it is no longer a public objective and cannot by scored by any additional players, but it does not count toward the secret objective total of the player who originally owned it.</Answer>
      <Question>During a revote initiated by the “Miscount Disclosed” agenda, does the law that is being voted on remain active and in play?</Question>
      <Answer>Yes, the law that is being voted on because of “Miscount Disclosed” remains in play during the revote.</Answer>
      <Question>If there is an ‘A’ wormhole on Mecatol Rex when the “Ixthian Artifact” agenda causes units in adjacent systems to be destroyed, does the Quantum Entanglement ability cause the Ghost of Creuss faction to lose units in a system that contains a ‘B’ wormhole?</Question>
      <Answer>No. Only the Creuss treats those systems as adjacent.</Answer>
      <Question>When units are destroyed by the “Ixthian Artifact” agenda, in what order are they destroyed?</Question>
      <Answer>Units destroyed by “Ixthian Artifact” are destroyed simultaneously.</Answer>
      <Question>If a player’s “Political Secret” promissory note is used against them, but that agenda is subsequently discarded by an effect such as the “Veto” action card, can that player vote and use faction abilities on the new agenda?</Question>
      <Answer>Yes. It is a new agenda and thus the effect of the player’s “Political Secret” is ended.</Answer>
      <Question>Can the “Colonial Redistribution” agenda elect a planet that is already the target of “Demilitarized Zone,” and if so, can the chosen player place infantry to take control of the planet?</Question>
      <Answer>Both agendas may target the same planet. However, in that situation, infantry cannot be placed on the elected planet, so it remains under the control of its original owner.</Answer>
      <Question>When the “Holy Planet of Ixth,” “Shard of the Throne,” or “The Crown of Emphidia” agendas are repealed, does the player who owns them lose a victory point?</Question>
      <Answer>No, the player who gained a victory point from these agendas can only lose that point through the effect stated on the card. If the card is discarded in any other way, such as the “Repeal Law” action card, the point is not lost.</Answer>
      <Question>Is the trigger for the “Minister of War” agenda card’s ability “performing an action”?</Question>
      <Answer>Yes. Performing any action is the trigger for the remainder of the “Minister of War” agenda card’s ability</Answer>
    </RuleSection>

    <RuleSection title='Action Cards'>
      <Question>Is the “Skilled Retreat” action card considered to be a retreat and can it be canceled by the action card “Intercept?”?</Question>
      <Answer>No, “Skilled Retreat” is not a retreat and cannot be canceled in this way.</Answer>
      <Question>Can “Sustain Damage” be used against the “Courageous to the End” action card?</Question>
      <Answer>No, “Courageous to the End” does not produce hits.</Answer>
      <Question>Can two “Direct Hit” action cards be played by the same player during the same round of combat against different targets?</Question>
      <Answer>Yes. Because the two “Direct Hit” cards are targeting different targets, this is allowed.</Answer>
      <Question>During space combat, can each player play a “Shields Holding” action card to cancel hits against his units, even though they are being played during the same timing window?</Question>
      <Answer>Yes. Because each of the “Shields Holding” cards are targeting different sets of hits (one set against player A and one set against player B), it is legal to play both cards.</Answer>
      <Question>Can the “Shields Holding” action card be used to cancel hits from abilities that occur during combat, such as “Ambush,” “Dimensional Splicer,” and “Devotion?”</Question>
      <Answer>Yes. “Shields Holding” may be used to cancel hits that are produced by these abilities.</Answer>
      <Question>Can the “Direct Hit” action cards be played when a ship uses “Sustain Damage” to cancel a hit produced by one of your abilities?</Question>
      <Answer>Yes. “Direct Hit” can be used to follow up hits that are assigned by “Ambush,” “Dimensional Splicer,” “Devotion,” and other similar abilities.</Answer>
      <Question>Does an effect that casts “additional votes,” such as the “Bribery” action card, create a timing window for playing the “Distinguished Councilor” action card?</Question>
      <Answer>No. The “Distinguished Councilor” action card can only be played after you vote during the “Vote” step of resolving an agenda.</Answer>
      <Question>When during the action card playing process is a “Sabotage” card played?</Question>
      <Answer>The “Sabotage” action can be played after card targets (such as units, planets, systems, cards, outcomes, or players) have been decided on, but must be played before any effects have been resolved, votes have been cast, or any dice have been rolled.</Answer>
      <Question>Can abilities that destroy units, such as the “Lucky Shot” action card, be used by a player against his own units or planets?</Question>
      <Answer>No. “Lucky Shot” and other similar effects can only be used against other player’s units and planets.</Answer>
      <Question>Can multiple rider action cards be played by the same player on a single agenda? If so, can they be played on different outcomes?</Question>
      <Answer>Yes to both. A player may play multiple rider action cards on a single agenda, and they may be played on opposing outcomes.</Answer>
      <Question>When playing the “Upgrade” action card, does the cruiser already have to be present in the active system?</Question>
      <Answer>Yes. The cruiser must already be in the activated system.</Answer>
      <Question>Can the “Experimental Battlestation” action card be used if no ships move into the active system, or against ships that do not belong to the active player?</Question>
      <Answer>No. “Experimental Battlestation” operates in the same timing window as “Space Cannon Offense,” can only target the active player’s ships, and can only be resolved if ships actually move into the active system.</Answer>
      <Question>Can a player who cannot vote (such as the Nekro Virus) play rider action cards?</Question>
      <Answer>Yes. The Nekro player, or a player who cannot vote due to another effect, can still play rider action cards.</Answer>
      <Question>If the speaker does not vote, can the “Bribery” action card still be played?</Question>
      <Answer>Yes, even if the speaker cannot vote, or chooses not to vote, the “Bribery” action card (or any effect with the timing window of “after the speaker votes”) can still be played after the timing window in which the speaker would have cast votes.</Answer>
    </RuleSection>

    <RuleSection title='The Arborec'>
      <Question>Can the secondary ability of the “Warfare” strategy card be used to trigger the “Production” ability of the Arborec’s Letani Warriors?</Question>
      <Answer>No, the “Warfare” secondary ability can only be used to trigger the production ability of space docks, and thus cannot be used by the Arborec to produce additional infantry.</Answer>
      <Question>Does the Arborec flagship (The “Duha Menaimon”) need to be in a system when it is activated to make use of its ability?</Question>
      <Answer>Yes. The “Duha Menaimon” can only be used to produce units when it is in a system at the moment it is activated.</Answer>
      <Question>Can the “Production” abilities of multiple Arborec “Letani Warriors” in a system be combined to allow the production of two infantry for one resource?</Question>
      <Answer>Yes. Production value is totaled when the “Production” ability of units in a system is used.</Answer>
    </RuleSection>

    <RuleSection title='The Nekro Virus'>
      <Question>Can the Nekro Virus use the “Valefar Assimilator” technologies on printed faction units such as the Embers of Muaat’s Prototype War Sun I?</Question>
      <Answer>No, printed faction units are not technologies, and thus are ineligible targets for “Valefar Assimilator.”</Answer>
      <Question>Do infantry involved in a space combat via the effects of “The Alastor” flagship count as ships for the purpose of card effects and fleet supply?</Question>
      <Answer>Infantry that are participating in space combat via “The Alastor” do count as ships (in addition to their own unit type) for the purpose of card effects, but, as a unit that can be transported, they do not count against fleet supply in that system.</Answer>
      <Question>Do infantry involved in a space combat due to the effects of “The Alastor” flagship cease participation in combat if the Alastor is destroyed?</Question>
      <Answer>No. Infantry that are committed to the space combat due to the effects of “The Alastor” continue to participate until the end of the combat, even if “The Alastor” is destroyed.</Answer>
      <Question>Can the Nekro Virus have both a standard and a faction-specific unit upgrade of the same type?</Question>
      <Answer>Yes. Only the faction-specific unit upgrade technology will be in effect, but should the Nekro lose the faction-specific upgrade technology that is being copied by the “Valefar Assimilator,” he would revert to the standard unit upgrade technology that was previously inactive.</Answer>
      <Question>If the Nekro Virus owns multiple unit upgrade technologies of the same type, such as “Dreadnought II” and “Exotrireme II,” does each one count toward the “Develop Weaponry” and “Revolutionize Warfare” objectives?</Question>
      <Answer>No. Only one upgrade of a given type counts toward those objectives.</Answer>
      <Question>Do infantry involved in a space combat via the effects of “The Alastor” flagship count toward the ships required to use the “Assault Cannon” technology?</Question>
      <Answer>Yes. These infantry may be used to resolve “Assault Cannon.”</Answer>
      <Question>Does the Winnu “Salai Sai Corian” flagship get additional dice for infantry participating in a fight due to the Nekro “Alastor” flagship?</Question>
      <Answer>Yes. The “Salai Sai Corian” would get one additional die per infantry.</Answer>
    </RuleSection>

    <RuleSection title='The Emirates of Hacan'>
      <Question>Does the Hacan player have to initiate negotiations in order to transact with a player who is not his neighbor?</Question>
      <Answer>So long as the active player is involved in the transaction, either player may suggest the opening of negotiations, on either player’s turn.</Answer>
    </RuleSection>

    <RuleSection title='The Xxcha Kingdom'>
      <Question>Can the Xxcha use the “Peace Accords” faction ability from one planet to another planet in the same system?</Question>
      <Answer>Yes, a planet is considered to be adjacent to its own system.</Answer>
    </RuleSection>

    <RuleSection title='The Ghosts of Creuss'>
      <Question>Can the Creuss Promissory note still be used if the Creuss have not researched “Wormhole Generator”?</Question>
      <Answer>Yes, the promissory not does not require that the “Wormhole Generator” technology have been researched.</Answer>
      <Question>Can the “Light/Wave Deflector” technology be used to move through a wormhole created by the Ghosts of Creuss’ “Hil Colish” flagship?</Question>
      <Answer>Yes, “Light/Wave Deflector” would allow a player other than the Ghosts of Creuss to move his fleet through the “Hil Colish’s” system into Creuss system or the Creuss Gate system.</Answer>
      <Question>If the “Hil Colish” moves before other ships and is returned to reinforcements by a gravity rift, can other ships still use its delta wormhole to reach the active system?</Question>
      <Answer>No, the wormhole ceases to exist when the “Hil Colish” is returned to reinforcements.</Answer>
    </RuleSection>

    <RuleSection title='The Naalu Collective'>
      <Question>Does the Naalu flagship (“The Matriarch”) allow the Naalu to take gain control of a planet using only fighters?</Question>
      <Answer>No. The Naalu fighters return to the space area when ground combat ends. If no Naalu ground forces are present, the combat is considered to be a draw, and the Naalu do not gain control of the planet during the “Establish Control” step.</Answer>
      <Question>Using the Naalu flagship (“The Matriarch”) in combination with the “Dacxive Animators” technology, can the Naalu gain control of a planet using only fighters?</Question>
      <Answer>No. Because the combat ends in a draw, the “Dacxive Animators” ability is not triggered.</Answer>
      <Question>Does the Naalu “0” token move with the strategy card it is placed on if the card is exchanged with or taken by another player?</Question>
      <Answer>No. The Naalu “0” token stays with the Naalu or the faction that gained the token through the “Gift of Prescience” promissory note and is placed on any of that player’s strategy cards.</Answer>
    </RuleSection>

    <RuleSection title='The Clan of Saar'>
      <Question>Can the Clan of Saar’s “Chaos Mapping” faction-specific technology be used at the start of each of that player’s turns during the action phase?</Question>
      <Answer>Yes, “Chaos Mapping” can be used as many times as you have turns during the action phase.</Answer>
      <Question>Can the Clan of Saar’s “Chaos Mapping” faction-specific technology be used on the turn that the Saar player passes?</Question>
      <Answer>Yes, “Chaos Mapping” can be used on the turn that a player passes.</Answer>
      <Question>Can the Clan of Saar’s “Floating Factories” trigger Space Cannon Defense or be assigned hits produced by PDS units?</Question>
      <Answer>No, “Floating Factories” cannot be the target of PDS fire.</Answer>
    </RuleSection>

    <RuleSection title='The Mentak Coalition'>
      <Question>Can the Mentak Coalition use the “Salvage Operations” faction- specific technology to produce a war sun that was destroyed if they do not personally have war sun technology?</Question>
      <Answer>No. Without war sun technology, they cannot produce a war sun, even using “Salvage Operations”.</Answer>
      <Question>Can the Mentak Coalition use the “Salvage Operations” faction- specific technology to produce their own flagship after destroying an opponent’s flagship?</Question>
      <Answer>Yes, even though the units are technically different, they share the flagship unit type.</Answer>
      <Question>Can the Mentak Coalition use the “Salvage Operations” faction- specific technology to produce infantry after a combat against the Nekro Virus flagship “The Alastor” in which Nekro Virus infantry were treated like ships and were subsequently destroyed?</Question>
      <Answer>No, the infantry do not count as ships once the combat is over.</Answer>
      <Question>Can the Mentak Coalition use the “Pillage” faction ability to steal trade goods when they are neighbors with another faction as a result of the “Lazax Gate Folding” faction technology or “Quantum Entanglement” faction ability?</Question>
      <Answer>Yes, even in the case of “Quantum Entanglement” only being active from the Creuss’ point of view, because the ‘neighbor’ status is active as a result of the ability, the Mentak may use their “Pillage” in these situations.</Answer>
      <Question>Can the Mentak Coalition use the “Pillage” faction ability for each time the Saar gain a trade good from the “Scavenge” faction ability in a single turn, provided that the other requirements are met?</Question>
      <Answer>Yes. The Mentak can trigger “Pillage” each time the Saar gain control of a planet, if all the conditions of “Pillage” are met.</Answer>
    </RuleSection>
  </div>
);