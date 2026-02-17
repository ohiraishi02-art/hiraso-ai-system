# テキストからGitHub Issueを自動作成する

ユーザーのテキスト入力からGitHub Issueを自動作成するスキル。

## 実行手順

1. **入力の解析**
   - ユーザーの入力テキストからタスクの内容を抽出
   - 優先度を判定（明示されていない場合は確認）
   - カテゴリを分類

2. **ラベルの自動付与**
   以下のラベル体系に基づいて付与する：
   - **タイプ**:
     - `type:task` — 具体的な作業タスク
     - `type:idea` — アイデア・検討事項
     - `type:content` — コンテンツ・発信関連
     - `type:bug` — バグ・不具合修正
   - **優先度**:
     - `priority:high` — 今日〜明日中に対応
     - `priority:medium` — 今週中に対応
     - `priority:low` — いつかやる
   - **ドメイン**:
     - `domain:product` — AIツール開発・プロダクト
     - `domain:strategy` — 経営戦略・事業開発
     - `domain:content` — 発信・記事・SNS
     - `domain:finance` — 経理・請求
     - `domain:learning` — インプット・学習
     - `domain:personal` — プライベート

3. **重複チェック**
   - 既存のOpen Issueを検索し、類似タスクがないか確認
   - 重複の可能性がある場合はユーザーに確認

4. **Issue作成**
   - `gh issue create` でIssueを作成
   - タイトル、本文、ラベルを設定
   - 必要に応じてProjectボードに追加

5. **報告**
   - 作成したIssueのURL・タイトル・ラベルをユーザーに報告

## 入力例
ユーザー: 「来週のセミナー資料を作る。優先度高め。Issueにして」

## 出力例
```
Issue作成完了:
- タイトル: セミナー資料の作成
- ラベル: type:task, priority:high, domain:content
- URL: https://github.com/...
```
