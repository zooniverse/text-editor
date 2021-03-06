import { getRoot, types } from 'mobx-state-tree'

const Reduction = types.model('Reduction', {
  clusters_x: types.array(types.number),
  clusters_y: types.array(types.number),
  clusters_text: types.array(types.array(types.string)),
  consensus_text: types.optional(types.string, ''),
  consensus_score: types.optional(types.number, 0),
  edited_consensus_text: types.optional(types.string, ''),
  extract_index: types.array(types.integer),
  flagged: types.optional(types.boolean, false),
  gold_standard: types.array(types.boolean),
  gutter_label: types.optional(types.integer, 0),
  line_editor: types.optional(types.string, ''),
  line_slope: types.maybeNull(types.number),
  low_consensus: types.optional(types.boolean, false),
  number_views: types.optional(types.integer, 0),
  original_transcriber: types.optional(types.string, ''),
  seen: types.optional(types.boolean, false),
  slope_label: types.optional(types.integer, 0),
  user_ids: types.array(types.maybeNull(types.union(types.integer, types.string)))
})
.actions(self => ({
  setConsensusText: (text, isOriginalOption = false, originalTranscriber = '') => {
    self.original_transcriber = originalTranscriber
    self.line_editor = isOriginalOption ? '' : getRoot(self).auth.userName
    self.edited_consensus_text = isOriginalOption ? '' : text

    const transcription = getRoot(self).transcriptions
    transcription.saveTranscription()
  },

  toggleCurrentFlag: function() {
    self.flagged = !self.flagged

    const transcription = getRoot(self).transcriptions
    transcription.checkForFlagUpdate()
  },

  toggleCurrentSeen: function() {
    self.seen = !self.seen

    const transcription = getRoot(self).transcriptions
    transcription.saveTranscription()
  }
}))

export default Reduction
