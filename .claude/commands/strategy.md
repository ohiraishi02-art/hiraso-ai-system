# 戦略分析チームを起動する

5人のエージェントチームで戦略分析を実行するスキル。

## チーム構成

| エージェント | 役割 | 定義ファイル |
|:-----------|:-----|:-----------|
| 問いの設計 | 分析すべき問いを構造化 | `.claude/agents/strategy-question-designer.md` |
| 市場調査 | 市場規模・トレンド・競合を調査 | `.claude/agents/strategy-market-researcher.md` |
| 定量分析 | 財務データ・KPIを分析 | `.claude/agents/strategy-quantitative-analyst.md` |
| 戦略設計 | 調査結果を統合し、戦略オプションを設計 | `.claude/agents/strategy-designer.md` |
| 批判的レビュー | 戦略の弱点・リスクを指摘 | `.claude/agents/strategy-critic.md` |

## ワークフロー

```
[ユーザーの分析テーマ]
        │
        ▼
  ① 問いの設計
        │
        ├──────────┐
        ▼          ▼
  ② 市場調査  ③ 定量分析  ← 並列実行
        │          │
        └────┬─────┘
             ▼
       ④ 戦略設計
             │
             ▼
     ⑤ 批判的レビュー
             │
             ▼
      [最終レポート]
```

## 実行手順

1. **テーマ確認**: ユーザーに分析テーマを確認する
2. **問いの設計**: `.claude/agents/strategy-question-designer.md` の手順に従い、分析の問いを設計する
3. **並列調査**: 以下を並列で実行する
   - `.claude/agents/strategy-market-researcher.md` に従い市場調査
   - `.claude/agents/strategy-quantitative-analyst.md` に従い定量分析
4. **戦略設計**: `.claude/agents/strategy-designer.md` に従い、調査結果を統合して戦略オプションを設計する
5. **批判的レビュー**: `.claude/agents/strategy-critic.md` に従い、戦略の弱点を指摘し改善提案を行う
6. **最終レポート作成**: 全エージェントの出力を統合し、最終レポートを `01_strategy/` に保存する

## 出力

- 最終レポート: `01_strategy/YYYY-MM-DD_[テーマ]_strategy-report.md`
- 各エージェントの中間出力も同フォルダに保存

## 注意事項

- 各フェーズ完了時にユーザーに中間報告を行い、方向性を確認する
- データの前提・推計ロジックは必ず明記する
- ファクトと意見を明確に区別する
