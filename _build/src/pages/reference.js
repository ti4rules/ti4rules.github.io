import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { RuleSection, RuleImageBlock } from '../components/RuleComponents';

const ReferencePage = () => (
  <Layout>
    <Seo title="Quick Reference" />
    <div className='container'>
      <h2>Quick Reference</h2>
      <div className='row'>
        <div className='col-sm'>
          <RuleSection title='Game Overview'>
            <h5>1. Strategy Phase</h5>
            <p>Players choose strategy cards starting with the speaker and proceeding clockwise.</p>

            <h5>2. Action Phase</h5>
            <p>Players take turns in initiative order, repeating until each player has passed.</p>

            <h5>3. Status Phase</h5>
            <p>Players perform cleanup steps in preparation for the next game round.</p>

            <h5>4. Agenda Phase</h5>
            <p>Players draw and resolve two agendas (once Mecatol Rex has been claimed).</p>
          </RuleSection>

          <RuleSection title='Actions'>
            <p>There are three types of actions that players may perform during the action phase:</p>

            <h5>Strategic Action</h5>
            <p>A player performs the primary action of their chosen strategy card. Then, other players perform the secondary ability of that card.</p>

            <h5>Component Action</h5>
            <p>A player may perform an action granted by their faction sheet, a technology, or an action card.</p>

            <h5>Tactical Action</h5>
            <p>A player may perform a tactical action by spending a command token from their tactic pool. They resolve the following steps:</p>
            <ol>
              <li>Activation</li>
              <li>Movement
                <ol>
                  <li>Move Ships</li>
                  <li>Space Cannon Offense</li>
                </ol>
              </li>
              <li>Space Combat</li>
              <ol>
                <li>Anti-Fighter Barrage</li>
                <li>Announce Retreat</li>
                <li>Make Combat Rolls</li>
                <li>Assign Hits</li>
                <li>Retreat</li>
              </ol>
              <li>Invasion</li>
              <ol>
                <li>Bombardment</li>
                <li>Commit Ground Forces</li>
                <li>Space Cannon Defense</li>
                <li>Ground Combat</li>
                <li>Establish Control</li>
              </ol>
              <li>Production</li>
            </ol>
          </RuleSection>
        </div>
        <div className='col-sm'>
          <RuleSection title='Status Phase'>
            <ol>
              <li>Score Objectives</li>
              <li>Reveal Public Objective</li>
              <li>Draw Action Cards</li>
              <li>Remove Command Tokens</li>
              <li>Gain and Redistribute Command Tokens</li>
              <li>Ready Cards</li>
              <li>Repair Units</li>
              <li>Return Strategy Cards</li>
            </ol>
          </RuleSection>

          <RuleSection title='Planet Traits'>
            <RuleImageBlock images={[
              { path: '/images/trait-cultural.svg', label: 'Cultural' },
              { path: '/images/trait-hazardous.svg', label: 'Hazardous' },
              { path: '/images/trait-industrial.svg', label: 'Industrial' }
            ]} />
          </RuleSection>

          <RuleSection title='Frequently Overlooked Rules'>
            <ul>
              <li>Players do not resolve the agenda phase until any player has removed the custodians token from Mecatol Rex.</li>
              <li>Players cannot pass during the action phase until they have performed a strategic action.</li>
              <li>When performing a strategic action, players cannot use the secondary ability of their own strategy cards.</li>
              <li>Players can produce units at a space dock in the active system during their tactical actions, even if they did not move ships or invade planets.</li>
              <li>Ships can only drop off ground forces in the active system.</li>
              <li>Players can exceed their ships’ capacity during combat.</li>
              <li>Players are limited to two PDS units and one space dock on each planet.</li>
              <li>Unit upgrade technology does not satisfy prerequisites.</li>
              <li>Players can exchange only one promissory note each as part of a single transaction.</li>
              <li>Players with upgraded PDS units in the same system as a wormhole can use those units’ “Space Cannon” abilities to fire through the wormhole.</li>
              <li>Players may trade promissory notes that were given to them by another player.</li>
              <li>A player is limited to three secret objectives, including both scored and unscored secret objectives.</li>
            </ul>
          </RuleSection>
        </div>
      </div>
    </div>
  </Layout>
);

export default ReferencePage