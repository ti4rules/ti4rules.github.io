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
    <RuleSection title='Hyper Metabolism (Technology)'>
      <p>The text of the “Hyper Metabolism” technology should read as follows: “During the status phase, gain <Errata>3</Errata> command tokens instead of <Errata>2</Errata>.”</p>
    </RuleSection>

    <RuleSection title='Diplomacy (Strategy Card)'>
      <p>The text of the “Diplomacy” strategy card’s secondary ability should read as follows: “Spend 1 token from your strategy pool to ready up to 2 exhausted planets <Errata>you control</Errata>.”</p>
    </RuleSection>

    <RuleSection title='Unstable Planet (Action Card)'>
      <p>The text of the “Unstable Planet” action card should read as follows: “Action: Choose 1 hazardous planet. Exhaust that planet and destroy <Errata>up to</Errata> 3 infantry on it.”</p>
    </RuleSection>

    <RuleSection title='Veto (Action Card)'>
      <p>The text of the “Veto” action card should read as follows: “Action: <Errata>When</Errata> an agenda is revealed: Discard that agenda and reveal 1 agenda from the top of the deck. Players vote on this agenda instead.”</p>
    </RuleSection>

    <RuleSection title='Devotion (Yin Brotherhood)'>
      <p>The text of the Yin Brotherhood’s “Devotion” faction ability should read as follows: “After each space battle round, you may destroy 1 of your cruisers or destroyers <Errata>in the active system</Errata> to produce 1 hit and assign it to 1 of your opponent’s ships <Errata>in that system</Errata>.”</p>
    </RuleSection>

    <RuleSection title='Matriarch (Naalu Collective)'>
      <p>The text of the Naalu flagship “Matriarch” should read as follows: “During an invasion in this system, you may commit fighters to planets as if they were ground forces. <Errata>When combat ends</Errata>, return those units to the space area.”</p>
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
    </RuleSection>

    <RuleSection title='Production'>
      <Question>When an ability other than “Production” allows you to produce one or more units, do you have to pay for the units produced?</Question>
      <Answer>Yes, a unit that is produced must always be paid for.</Answer>

      <Question>When producing a unit with an ability other than “Production,”
does the price reduction from the “Sarween Tools” technology apply?</Question>
      <Answer>No, “Sarween Tools” is only used with the “Production” ability.</Answer>
    </RuleSection>

    <RuleSection title='Agendas'>
      <Question>When a “Research Team” agenda that is attached to a planet is used to ignore a prerequisite, is the planet exhausted?</Question>
      <Answer>No. The agenda is exhausted to ignore the prerequisite, not the planet.</Answer>
      <Question>Can a player cast ‘0’ votes “For” or “Against” on an agenda instead of abstaining, in order to take advantage of effects associated with that option?</Question>
      <Answer>No. A vote of ‘0’ is the same as abstaining; that player gains no positive or negative effects of voting “For” or “Against” on an agenda if he contributed ‘0’ votes.</Answer>
      <Question>If the “Classified Document Leaks” agenda is discarded, and the secret objective’s original owner already had three scored secret objectives, what happens?</Question>
      <Answer>All scored secret objectives remain in play.</Answer>
    </RuleSection>

    <RuleSection title='Action Cards'>
      <Question>Is the “Skilled Retreat” action card considered to be a retreat and can it be canceled by the action card “Intercept?”?</Question>
      <Answer>No, “Skilled Retreat” is not a retreat and cannot be canceled in this way.</Answer>
      <Question>Can “Sustain Damage” be used against the “Courageous to the End” action card?</Question>
      <Answer>No, “Courageous to the End” does not produce hits.</Answer>
      <Question>During space combat, can each player play a “Shields Holding” action card to cancel hits against his units, even though they are being played during the same timing window?</Question>
      <Answer>Yes. Because each of the “Shields Holding” cards are targeting different sets of hits (one set against player A and one set against player B), it is legal to play both cards.</Answer>
      <Question>Can the “Shields Holding” action card be used to cancel hits from abilities that occur before combat, such as Dimensional Splicer and Devotion?</Question>
      <Answer>No. “Shields Holding” may only be used to cancel hits that are produced during combat.</Answer>
      <Question>Can two “Direct Hit” action cards be played by the same player on the same round of combat against different targets?</Question>
      <Answer>Yes. Because the two “Direct Hit” cards are targeting different targets, this is allowed.</Answer>
      <Question>Does the “Enforced Travel Ban” agenda prevent “Space Cannon” usage through wormholes?</Question>
      <Answer>No. “Enforce Travel Ban” does not prevent “Space Cannon” usage.</Answer>
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
      <Question>Do infantry involved in a space combat via the effects of “The Alastor” flagship cease participation in combat if the Alastor is destroyed?</Question>
      <Answer>Yes. Infantry that are participating in space combat via “The Alastor” cease being part of the combat after “The Alastor” is destroyed.</Answer>
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
    </RuleSection>

    <RuleSection title='The Naalu Collective'>
      <Question>Does the Naalu flagship (“The Matriarch”) allow the Naalu to take gain control of a planet using only fighters?</Question>
      <Answer>No. The Naalu fighters return to the space area when ground combat ends. If no Naalu ground forces are present, the combat is considered to be a draw, and the Naalu do not gain control of the planet during the “Establish Control” step.</Answer>
      <Question>Using the Naalu flagship (“The Matriarch”) in combination with the “Dacxive Animators” technology, can the Naalu gain control of a planet using only fighters?</Question>
      <Answer>No. Because the combat ends in a draw, the “Dacxive Animators” ability is not triggered.</Answer>
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
    </RuleSection>
  </div>
);