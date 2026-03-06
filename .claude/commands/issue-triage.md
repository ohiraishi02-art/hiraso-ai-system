# /issue-triage — タスク管理・GitHub Issue自動作成

ユーザーのテキスト入力からGitHub Issueを自動作成するスキル。

## 実行手順

1. **入力テキストを解析**
   - タスクの内容・目的を把握する
   - 優先度を判定する（緊急か、重要か）
   - カテゴリを判定する（戦略 / コンテンツ / プロジェクト / 経理 / 学習）

2. **ラベルを自動付与**
   - タイプ：`type:task` / `type:idea` / `type:content` / `type:research`
   - 優先度：`priority:high` / `priority:medium` / `priority:low`
   - ドメイン：`domain:strategy` / `domain:content` / `domain:project` / `domain:finance`

3. **重複チェック**（GitHub連携済みの場合）
   - 既存の未完了Issueと内容が重複していないか確認する
   - 重複がある場合はユーザーに報告する

4. **GitHub Issueを作成**（GitHub連携済みの場合）
   - タイトル・本文・ラベル・マイルストーンを設定して作成する
   - 該当するProjectボードに追加する

5. **GitHub未連携の場合**
   - DAILY.mdの「優先タスク」セクションに追記する
   - `/Users/osamuhiraishi/AIエージェント/03_projects/` 内の該当ファイルに記録する

6. **結果報告**
   - 作成したIssueのURL（または記録場所）をユーザーに報告する

## GitHub未連携時のフォールバック
GitHub連携が設定されていない場合は、タスクをDAILY.mdおよびプロジェクトフォルダに記録する。
